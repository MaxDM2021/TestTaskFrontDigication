import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

const config: Configuration & { devServer?: DevServerConfiguration } = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,
    historyApiFallback: true,
    hot: true,
    liveReload: true,
    compress: true,
  },
};

export default config;