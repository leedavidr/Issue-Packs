#!/usr/bin/env node

var chalk = require('chalk');
var GithubAPI = require('github');
var YAML = require('yamljs');
var IssuePack = require('./lib/issue-pack');

require('dotenv').config();

//Validate input

var github = new GithubAPI({
  version: "3.0.0",
});

//Check credentials
  //User
  //Password
  //Repo
    //Check repo exists

//Authenticate
// github.authenticate({
//   type: "basic",
//   username: username,
//   password: password
// });

//Parse YAML

  //Milestone
  //Issues
    //Title
    //Description
    //Tags (optional)

//Check Milestone exists in repo
  //If milestone exists
    //Exit
  //Otherwise
    //Create Milestone
      //Create issues

