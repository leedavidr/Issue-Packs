"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IssuePack = function () {
  //Set initial options and logger

  function IssuePack(options) {
    var logger = arguments.length <= 1 || arguments[1] === undefined ? console : arguments[1];

    _classCallCheck(this, IssuePack);

    this.options = options;
    this.logger = logger;
  }

  /**
   *  Loads a pack's contents into the class and logs some stuff
   *  @param { Object } pack - Object representation of an issue pack
   */


  _createClass(IssuePack, [{
    key: 'load',
    value: function load(pack) {
      this.logger.log(_chalk2.default.yellow('Unpacking milestone: ' + pack.milestone));
      this.logger.log(_chalk2.default.green(' - ' + pack.issues.length + ' issues unpacked.'));
      this.pack = pack;
    }

    /**
     *  Authenticate with Github
     */

  }, {
    key: 'authenticate',
    value: function authenticate() {
      this.logger.log(_chalk2.default.yellow('Authenticating with Github'));
      this.options.github.authenticate({
        type: 'basic',
        username: this.options.creds.username,
        password: this.options.creds.password
      });
    }

    /**
     *  Push issue pack to Github
     */

  }, {
    key: 'push',
    value: function push() {
      var _this = this;

      this.logger.log(_chalk2.default.yellow('Pushing milestone to Github'));

      this._createMilestone(this.pack.milestone, function (milestone) {
        _this._createIssues(_this.pack.issues, _this.options.creds.repo, milestone);
      });
    }

    /**
     *  Iterate through issues and create each
     */

  }, {
    key: '_createIssues',
    value: function _createIssues(issues, repo, milestone) {
      var _this2 = this;

      issues.forEach(function (issue) {
        _this2._createIssue(issue, repo, milestone);
      });
    }

    /**
     * Create each issue on Github
     */

  }, {
    key: '_createIssue',
    value: function _createIssue(issue, repo, milestone) {
      this.options.github.issues.create({
        user: repo.split('/')[0],
        repo: repo.split('/')[1],
        title: issue.title,
        body: issue.body,
        milestone: milestone,
        labels: issue.labels
      }, function (err, data) {
        if (err) {
          this.logger.log(_chalk2.default.red('Error: ' + err));
        } else {
          this.logger.log(_chalk2.default.green('Issue created: ' + data.html_url));
        }
      }.bind(this));
    }

    /**
     *  Create milestone on Github
     */

  }, {
    key: '_createMilestone',
    value: function _createMilestone(milestone, cb) {
      return this.options.github.issues.createMilestone({
        user: this.options.creds.repo.split('/')[0],
        repo: this.options.creds.repo.split('/')[1],
        title: milestone
      }, function (err, data) {
        if (err) {
          this.logger.log(_chalk2.default.red('Error: ' + err));
        } else {
          this.logger.log(_chalk2.default.green('Milestone created: ' + data.html_url));
          cb(data.number);
        }
      }.bind(this));
    }
  }]);

  return IssuePack;
}();

exports.default = IssuePack;