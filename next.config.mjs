/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const nextPWA = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["bestfriends.org"],
  },
};

export default nextPWA(nextConfig);
