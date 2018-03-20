import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import lessToJs from 'less-vars-to-js';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const themeVariable = lessToJs(fs.readFileSync(path.join(__dirname,
'./src/custom-theme.less'), 'utf-8'));

const config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/main.js',
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['react-hot-loader/babel'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: themeVariable,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'template.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};

export default config;
