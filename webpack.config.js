module.exports = {
//   rules: [
//     {
//       test: /\.(jpe?g|gif|png|svg)$/i,
//       use: [
//         {
//           loader: 'url-loader',
//           options: {
//             limit: 10000
//           }
//         }
//       ]
//     }
//   ],
  resolve: {
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify") 
      //"path": false,
    },
    alias: {
      '@cornerstonejs/dicom-image-loader':
        '@cornerstonejs/dicom-image-loader/dist/dynamic-import/cornerstoneDICOMImageLoader.min.js',
    },
  },
//   plugins: [
//     new CopyWebpackPlugin([
//       {
//         from:
//           '../../../node_modules/cornerstone-wado-image-loader/dist/dynamic-import',
//         to: './anan',
//       },
//     ]),
//   // Diğer webpack ayarları
};
