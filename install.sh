#!/bin/bash

set -e

for folder in $(ls -d */); do
    cd $folder
    echo "Installing $folder"
    npm install
    cd ..
done