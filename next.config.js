/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

import withPWA from 'next-pwa';
// const withPWA = require('next-pwa');

const NextPWA = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});

export default {
  nextConfig, NextPWA
};
