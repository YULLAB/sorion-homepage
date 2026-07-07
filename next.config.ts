import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "sori-on.com",
          },
        ],
        destination: "https://www.sori-on.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
