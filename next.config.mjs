/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
        pathname: "**",
        protocol: "https",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
