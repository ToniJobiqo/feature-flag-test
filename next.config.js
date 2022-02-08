/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  serverRuntimeConfig: {
    secondSecret: process.env.SECOND_SECRET,
  },
  publicRuntimeConfig: {
    flag: false,
  },
}
