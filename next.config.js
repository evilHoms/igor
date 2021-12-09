const path = require('path');

module.exports = {
    env: {
        PUBLIC_URL: "https://evilHoms.github.io/igor",
        assetPrefix: './'
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.extensions.push('.tsx');

        config.module.rules.push({
            test: /\.(png|gif|jpg|jpeg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  emitFile: isServer,
                  publicPath: `/_next/static/`,
                  outputPath: `${isServer ? '../' : ''}static/`,
                  name: '[path][name].[ext]'
                }
              }
            ]
        });

        config.module.rules.push({
          test: /\.(mov|mp4)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                emitFile: isServer,
                publicPath: `/_next/static/`,
                outputPath: `${isServer ? '../' : ''}static/`,
                name: '[name].[ext]'
              }  
            }
          ]
        });

        config.resolve.alias.utils = path.resolve(__dirname, 'utils');
        config.resolve.alias.types = path.resolve(__dirname, 'types');
        config.resolve.alias.components = path.resolve(__dirname, 'components');
        config.resolve.alias.common = path.resolve(__dirname, 'components/common');

        return config;
    },
}