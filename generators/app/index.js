'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Hey! Welcome to the pioneering ' + chalk.red('generator-angular-2') + ' generator!'
    ));

    var prompts = [{
      //type: 'confirm',
      name: 'projname',
      message: 'What would be your project name?'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.projname = _.kebabCase(props.projname);

      //this.log('Project name entered is ' + this.projname);
    }.bind(this));
  },

  writing: function () {
    
    var projname = this.projname;
    mkdirp(this.projname, function (err) {
        if (err) console.error(err)
        else console.log(projname + ' created!')
    });

    this.fs.copy(
      this.templatePath('client'),
      this.destinationPath(this.projname + '/' + 'client')
    );

    this.fs.copy(
      this.templatePath('app'),
      this.destinationPath(this.projname + '/' + 'app')
    );

    this.template('package.json', this.projname + '/' + 'package.json');
    this.template('bs-config.json', this.projname + '/' + 'bs-config.json');
    this.template('index.html', this.projname + '/' + 'index.html');
    this.template('typings.json', this.projname + '/' + 'typings.json');
    this.template('tsconfig.json', this.projname + '/' + 'tsconfig.json');
    this.template('systemjs.config.js', this.projname + '/' + 'systemjs.config.js');
    
    this.template('README.md', this.projname + '/' + 'README.md');

    this.template('client/html/component.html', this.projname + '/' + 'client/html/component.html');
  },

  install: function () {
    //this.installDependencies();
  }
});
