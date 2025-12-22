// import {
//   CopilotRuntime,
//   ExperimentalEmptyAdapter,
//   copilotRuntimeNextJSAppRouterEndpoint,
// } from "@copilotkit/runtime";
// import { HttpAgent } from "@ag-ui/client";
// import { NextRequest } from "next/server";
// const serviceAdapter = new ExperimentalEmptyAdapter();
// const runtime = new CopilotRuntime({
//   agents: {
//     sql_agent: new HttpAgent({ url: process.env.NEXT_PUBLIC_COPILOT_END_POINT || "http://localhost:8000/copilotkit" }),
//   }
// });
// export const POST = async (req: NextRequest) => {
//   const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
//     runtime,
//     serviceAdapter,
//     endpoint: process.env.NEXT_PUBLIC_COPILOT_RUNTIME_URL || "/api/copilotkit",
//   });
//   return handleRequest(req);
// };
export {};