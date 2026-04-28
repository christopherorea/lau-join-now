
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Basado en tus logs, el repositorio es 'lau-join-now'. 
  // basePath asegura que Next.js busque los archivos en la subcarpeta correcta.
  basePath: '/lau-join-now',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
