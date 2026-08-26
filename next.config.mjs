/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Static export has no image optimisation server, so next/image must
  // serve the files as-is.
  images: { unoptimized: true },
};

export default nextConfig;
