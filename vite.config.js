// vite.config.js
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import fs from 'fs';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: 'localhost',
    // https: {
    //   key: fs.readFileSync('./.ssl/RootCA.key'),
    //   cert: fs.readFileSync('./.ssl/RootCA.pem'),
    // },
    headers: {
      'Cache-Control': 'no-store'
    },
    hmr: {
      protocol: 'ws',
    }
  },
  experimental: { hmrPartialAccept: true },
  plugins: [
    react({ 
      exclude: /\.test\.(t|j)sx?$/,
      jsxImportSource: '@welldone-software/why-did-you-render', 
    }),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'staticwebapp.config.json',
          dest: ''
        }
      ]
    }),
    istanbul({
      include: 'app/*',
      exclude: ['node_modules', '**/assets/', '*.test.*'],
      extension: ['.ts', '.tsx'],
    }),
  ]
});