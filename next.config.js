/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
        port: "",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;
