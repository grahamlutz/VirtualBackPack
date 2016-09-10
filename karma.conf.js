module.exports = function(config) {
    var JS_PATH = "src/scripts/",
        TEST_PATH = "src/tests/";

  config.set({
    basePath : '.',
    frameworks: ['jasmine', 'commonjs'],
    files: [
        JS_PATH + 'libs/angular/angular.js',
        JS_PATH + 'libs/angular-mocks/angular-mocks.js',
        JS_PATH + 'services/*.js',
        JS_PATH + 'controllers/*.js',
        JS_PATH + 'directives/*.js',
        JS_PATH + 'app.js',
        TEST_PATH + '/**/*-spec.js'
    ],
    preprocessors: {
        JS_PATH + 'app.js': ['commonjs', 'coverage'],
        JS_PATH + 'libs/angular/angular.js': ['commonjs'],
        JS_PATH + 'libs/angular-mocks/angular-mocks.js': ['commonjs'],
        JS_PATH + 'services/*.js': ['commonjs', 'coverage'],
        JS_PATH + 'controllers/*.js': ['commonjs', 'coverage'],
        JS_PATH + 'directives/*.js': ['commonjs', 'coverage'],
        TEST_PATH + '/**/*-spec.js': ['commonjs']
    },
    reporters: ['coverage', 'progress'],
    coverageReporter: {
        type: 'lcov',
        dir: 'reports',
        file: 'lcov.info'
    },
    port: 9876,
    runnerPort: 9100,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: true
  });
};
