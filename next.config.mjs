/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/home",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
