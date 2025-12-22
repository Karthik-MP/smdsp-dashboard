from pathlib import Path
from psycopg2.pool import ThreadedConnectionPool
from app.utils.logger import Logger
from dotenv import load_dotenv
from fastapi.concurrency import run_in_threadpool

load_dotenv(Path(__file__).resolve().parent.parent / ".env")

logger = Logger("logs").get_logger()

logger = Logger("logs").get_logger()

_db_pools: dict[str, ThreadedConnectionPool] = {}


def init_db_pool(name: str, database_url: str):
    if name not in _db_pools:
        logger.info(f"Initializing DB pool: {name}")
        _db_pools[name] = ThreadedConnectionPool(
            minconn=1,
            maxconn=10,  # tune per DB
            dsn=database_url,
        )


def get_db_pool(name: str) -> ThreadedConnectionPool:
    pool = _db_pools.get(name)
    if not pool:
        raise RuntimeError(f"DB pool '{name}' not initialized")
    return pool


class PLSQL:
    def __init__(self, db_name: str):
        self.pool = get_db_pool(db_name)
        self.conn = self.pool.getconn()
        self.cur = self.conn.cursor()

    def get_data_from(self, query, params=None):
        try:
            self.cur.execute(query, params)
            return self.cur.fetchall()
        finally:
            self.cur.close()
            self.pool.putconn(self.conn)


async def get_data_db(database_name, query, param=None):
    plsql = PLSQL(database_name)
    result = await run_in_threadpool(plsql.get_data_from, query, param)
    return result
