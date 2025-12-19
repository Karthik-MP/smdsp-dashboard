/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone",
  serverExternalPackages: [
    "pino",
    "pino-pretty",
    "thread-stream",
    "sonic-boom",
    "@copilotkit/runtime",
  ],
  redirects: async () => [
    {
      source: "/",
      destination: "/chan",
      permanent: false,
    },
  ],
};

export default nextConfig;