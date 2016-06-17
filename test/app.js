'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-angular-2:app', function () {
  var projname = 'test-app';

  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({projname: projname})
      .toPromise();
  });

  it('creates root files', function () {
    assert.file([
      projname + '/package.json',
      projname + '/bs-config.json',
      projname + '/index.html',
      projname + '/typings.json',
      projname + '/tsconfig.json',
      projname + '/systemjs.config.js',
      projname + '/README.md'
    ]);
  });

  it('creates client directory', function () {
    assert.file([
      projname + '/client/css/app.css',
      projname + '/client/html/component.html'
    ]);
  });

  it('creates app directory', function () {
    assert.file([
      projname + '/app/app.ts',
      projname + '/app/js/component.ts'
    ]);
  });
});
