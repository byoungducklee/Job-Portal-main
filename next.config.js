/** @type {import('next').NextConfig} */
import NextCors from 'nextjs-cors';

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};


// async function handler(req, res) {
//    // Run the cors middleware
//    // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
//    await NextCors(req, res, {
//       // Options
//       methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//       origin: '*',
//       optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//    });

//    // Rest of the API logic
//    res.json({ message: 'Hello NextJs Cors!' });
// }


const nextConfig = {
  images: {
    domains: ['api.dicebear.com', 'xsgames.co'],
  },
  reactStrictMode: true,
  // swcMinify: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "https://job-portal-main-a9zzl1f07-byoungducklee.vercel.app/api/:path*",
  //     },
  //   ];
  // },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, './node_modules/pdfjs-dist/build/pdf.worker.min.js'),
          to: path.join(__dirname, 'dist'),
        },
      ],
    }),

  ],
  entry: {
    main: './src/index.tsx',
    'pdf.worker': path.join(__dirname, './node_modules/pdfjs-dist/build/pdf.worker.min.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
}

module.exports = nextConfig
