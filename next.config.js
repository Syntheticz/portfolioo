/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI: 'mongodb+srv://User:lX7gXvlOya744gW3@clusterphobic.b8mshcc.mongodb.net/?retryWrites=true&w=majority'
  },
}

module.exports = nextConfig
