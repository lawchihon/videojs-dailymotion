module.exports = function(config) {
  var configuration = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/video.js/dist/video.js',
      'dist/Dailymotion.min.js',
      'tests/**/*.specs.js'
    ],
    browsers: ['ChromeHeadless'],
    customLaunchers: {
        'ChromeTravisCI': {
            base: 'Chrome',
            flags: ['--no-sandbox']
        }
    }
  };

  config.set(configuration);
};
