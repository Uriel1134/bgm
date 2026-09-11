/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Génère le dossier statique 'out' prêt pour l'hébergement ultra-rapide Cloudflare Pages
  reactStrictMode: true,
  poweredByHeader: false, // Masque le header X-Powered-By: Next.js
  images: {
    unoptimized: true
  }
};

export default nextConfig;
