# Issue-Packs
* * *

[![Build Status](https://travis-ci.org/GovReady/Issue-Packs.svg?branch=master)](https://travis-ci.org/GovReady/Issue-Packs)  [![Coverage Status](https://coveralls.io/repos/github/GovReady/Issue-Packs/badge.svg?branch=master)](https://coveralls.io/github/GovReady/Issue-Packs?branch=master)

Generate packs of GitHub issues from YAML files

## Installation

Requirements:

* NodeJS >= 1.1

Run `npm install -g issue-pack` to install globally

## Usage

**The pack arguments can either be a series of files or a directory**

`issue-pack -u username -p password -r repo (pack1.yml ...) [pack2.yml] [pack3.yml] ...`

  * _username_: Github Username
  * _password_: Github Password
  * _repo_: Repos take the form `user/repo` (_eg. GovReady/Issue-Packs_)
  * _inputs_: this can be a series of issue pack YAML files or a directory containing issue pack YAML files

## Examples

Example issue packs can be found in the `examples/` directory.

* `issue-pack -u your-user -p your-github-password -r GovReady/Issue-Packs examples`
  * If running from the root of this repo, this will run all of the issue packs in the `examples` directory against this repo
* `issue-pack -u your-user -p your-github-password -r GovReady/Issue-Packs examples/example-pack.yml`
  * If running from the root of this repo, this will run just the `example-pack.yml` issue pack against this repo

### Issue Pack Format ( YAML )

```

milestone: <milestone name> # Required
issues: # Required
  -
    title: <issue title> # Required
    body: <issue body text> # Required
    labels: # Optional
      - <tag 1>
      - <tag 2>
  -
    title: <issue title>
    body: <issue body text>
    labels:
      - <tag 1>
      - <tag 2>
  ...

```

## Development

_If you would like to contribute, you will need to be able to compile and run the issue-pack npm module locally_

The contribution guidelines are included below, but [this blog post](http://javascriptplayground.com/blog/2015/03/node-command-line-tool/) is a good starter on the subject.

**Contribution Guidelines**

The contribution guidelines for this repository can be found [in CONTRIBUTING.md](https://github.com/GovReady/Issue-Packs/blob/master/CONTRIBUTING.md).
