/* eslint import/no-extraneous-dependencies: "off" */

const path = require('path');
const webpack = require('webpack');

const library = 'cspaceUIPluginRecordOsteology';
const isProduction = process.env.NODE_ENV === 'production';
const filename = `${library}${isProduction ? '.min' : ''}.js`;

const config = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    filename,
    library,
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]-[name]--[local]',
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      [`${library}.packageName`]: JSON.stringify(process.env.npm_package_name),
      [`${library}.packageVersion`]: JSON.stringify(process.env.npm_package_version),
    }),
    // Replace react-intl with a stub. For messages to be extracted by babel-plugin-react-intl,
    // react-intl must be imported, and the defineMessages marker function must be called. This
    // would cause the entire react-intl package to be bundled with this package, needlessly
    // increasing its size.
    new webpack.NormalModuleReplacementPlugin(
      /^react-intl$/,
      path.resolve(__dirname, 'react-intl-stub.js'),
    ),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: __dirname,
    },
  },
};

module.exports = config;
