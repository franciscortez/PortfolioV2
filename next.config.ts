import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.ngrok-free.dev"],
  reactCompiler: true,
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;
