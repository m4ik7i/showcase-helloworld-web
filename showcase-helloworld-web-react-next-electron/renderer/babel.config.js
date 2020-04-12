const { devDependencies } = require('../package.json');

const { electron } = devDependencies;

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: {
            electron: electron.replace(/^\^|~/, ''),
          },
        },
      },
    ],
  ],
};
