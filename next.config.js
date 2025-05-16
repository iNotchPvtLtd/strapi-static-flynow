/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  trailingSlash: true, 
  images: {
      unoptimized: true, 
      domains: ['imakesite.s3.eu-north-1.amazonaws.com']
    },
  assetPrefix:  'https://imakesite.s3.eu-north-1.amazonaws.com/templates/flynow',
  basePath: '/templates/flynow',

  };

  module.exports = nextConfig;