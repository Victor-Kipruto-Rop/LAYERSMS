/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',

  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
      {
        source: '/android',
        destination: 'https://github.com/Victor-Kipruto-Rop/LAYERSMS/releases',
        permanent: false,
      },
      // The invite itself lives behind github.com/Victor-Kipruto-Rop/LAYERSMS/discussions, so it can rotate
      // in one place.
      {
        source: '/discord',
        destination: 'https://github.com/Victor-Kipruto-Rop/LAYERSMS/discussions',
        permanent: false,
      },
    ]
  },
}



module.exports = nextConfig;
