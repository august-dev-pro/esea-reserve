/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["easy-reserve-backend-mzfv.onrender.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
