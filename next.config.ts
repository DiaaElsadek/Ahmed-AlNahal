import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/assets/:path*.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: "inline",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
