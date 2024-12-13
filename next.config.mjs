/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["zdnemnarodzhennja.com"], // Додайте сюди ваш домен
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
