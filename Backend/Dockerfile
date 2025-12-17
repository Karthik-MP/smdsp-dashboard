FROM python:3.13

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV UV_SYSTEM_PYTHON=1

RUN apt-get update && apt-get install -y && rm -rf /var/lib/apt/lists/*

RUN python3 --version

# Install uv
RUN curl -LsSf https://astral.sh/uv/install.sh | sh

ENV PATH="/root/.local/bin:$PATH"

RUN python --version && uv --version

WORKDIR /app

COPY pyproject.toml uv.lock ./
RUN uv sync --frozen

COPY app ./app

# Non-sensitive default configuration
ENV LLM_MODEL=gpt-4.1-mini

# Sensitive environment variables should be passed at runtime:
# docker run -e OPENAI_API_KEY=your_key \
#            -e CHAN_DATABASE_URL=postgres://... \
#            -e REDDIT_DATABASE_URL=postgres://... \
#            your_image

EXPOSE 8000

CMD ["uv", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]