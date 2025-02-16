/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8800",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "easy-reserve-backend-mzfv.onrender.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
