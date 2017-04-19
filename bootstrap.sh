#!/usr/bin/env bash

apt-get update

# Unix utils

apt-get install -y vim
apt-get install -y curl
apt-get install -y git-core
apt-get install -y silversearcher-ag
apt-get install -y dos2unix
apt-get install -y htop
apt-get install -y python-dev
apt-get install -y g++
apt-get install -y cloc
apt-get install -y rig

# Web techs
apt-get install -y python-software-properties python g++ make
add-apt-repository -y ppa:chris-lea/node.js
apt-get update
apt-get install -y nodejs
ln -s /usr/bin/nodejs /usr/bin/node
apt-get install -y npm

# Zsh (http://stackoverflow.com/questions/25763017/install-oh-my-zsh-on-a-vagrant-box-as-part-of-the-bootstrap-process)
# Added zsh shell.
apt-get install -y zsh
#wget --no-check-certificate https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh 
#chsh -s $(which zsh) $(whoami)
#zsh

# npm fix: https://github.com/nodejs/node-v0.x-archive/issues/3911
npm install npm -g
npm update -g npm
npm install -g bower
npm install -g gulp-cli
