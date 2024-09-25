/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/e-commerce-page",
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["cdn.dummyjson.com"],
  },
};

export default nextConfig;
