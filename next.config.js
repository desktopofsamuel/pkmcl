const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer({
  images: {
    domains: ["i.scdn.co"],
  },
  experimental: {
    appDir: true,
  },
});
