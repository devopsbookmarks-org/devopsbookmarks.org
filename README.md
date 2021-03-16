# Devops Bookmarks

Welcome to DevOpsBookmarks, home of https://www.devopsbookmarks.org. This is a fork of the original www.devopsbookmarks.com: https://github.com/devopsbookmarks/devopsbookmarks.com; however, we've decided to maintain this as the original site is down.

> To discover tools in the devops landscape.

There are new awesome tools and frameworks being released everyday.
This is an open and transparent attempt at aggregating all these tools
and frameworks.

## Current Build Status

[![Build Status](https://travis-ci.org/zigsphere/devopsbookmarks.org.svg?branch=master)](https://travis-ci.org/zigsphere/devopsbookmarks.org)
[![CircleCI](https://circleci.com/gh/zigsphere/devopsbookmarks.org.svg?style=shield)](https://circleci.com/gh/zigsphere/devopsbookmarks.org)

## Contributing

Refer to [CONTRIBUTING.md](https://github.com/zigsphere/devopsbookmarks.org/blob/master/CONTRIBUTING.md)

## Development

VAGRANT
* Make sure you have VirtualBox and Vagrant installed
* Clone this repository
* Run `vagrant up` to provision the VM
* Run `vagrant ssh -c /vagrant/script/server` to start the server

DOCKER
* Run `docker build -t devops .`
* Run `docker run -p 3000:3000/tcp -d --name devops devops`
* Navigate to http://localhost:3000 in your browser

## Inspiration

* http://www.unheap.com/
* https://www.ruby-toolbox.com/
* http://microjs.com/
