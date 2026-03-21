import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://gred-nine.vercel.app/**"),
      new URL("https://github.com/**"),
      new URL("https://www.cisco.com/**")
    ],
  },
};

export default nextConfig;
