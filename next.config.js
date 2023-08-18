// /**
//  * @type {import('next').NextConfig}
//  */

// const runtimeCaching = require("next-pwa/cache");

// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   runtimeCaching,
//   buildExcludes: [/middleware-manifest.json$/],
// });

// const nextConfig = withPWA({
//   reactStrictMode: true,
//   // images: {
//   //   loader: 'akamai',
//   //   path: '',
//   // },

//   distDir: "dist",
//   trailingSlash: true,
// });
// module.exports = {
//   images: { unoptimized: true },
//    images: {
//     loader: 'akamai',
//     path: '',
//   },
//   output: 'export' ,
//   distDir: "build",
//   trailingSlash: true,
//   basePath: "/dist/server/pages/index.html",
//   assetPrefix: "/dist/server/pages/",
// };
// module.exports = nextConfig;
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
});
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
        port: '',
      },
    ],
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  distDir: 'build',
  trailingSlash: true,
  basePath: '/dist/server/pages/index.html',
  assetPrefix: '/dist/server/pages/',
};
module.exports = nextConfig;