import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "asiacommerce.net" },
      { protocol: "https", hostname: "www.asiacommerce.net" },
    ],
  },
};

export default nextConfig;
