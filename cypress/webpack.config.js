// const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
// const webpack = require('webpack'); //to access built-in plugins

// // cypress/webpack.config.js
// module.exports = {
//     resolve: {
//       extensions: [".ts", ".js"]
//     },
//     node: { fs: "empty", child_process: "empty", readline: "empty" },
//     module: {
//       rules: [
//         {
//             test: /\.feature$/,
//             use: [
//               {
//                 loader: "cypress-cucumber-preprocessor/loader"
//               }
//             ]
//         }],
//         plugins : [
//             new HtmlWebpackPlugin({template: './'})
        
//       ]
//     }
//   };