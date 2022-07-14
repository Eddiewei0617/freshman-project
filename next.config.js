/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "stage-ii.xinmedia.com",
      "buzzorange.com",
      "4.bp.blogspot.com",
      "pic.pimg.tw",
    ],
  },
};

module.exports = nextConfig;
