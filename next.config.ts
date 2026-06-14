import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image configuration (allow all remote images)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all HTTPS domains
      },
      {
        protocol: "http",
        hostname: "**", // allow all HTTP domains (not recommended for prod)
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
