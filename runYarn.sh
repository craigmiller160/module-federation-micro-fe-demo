#!/bin/bash

currentDir=$(pwd)
files=$(find . -name 'package.json')
for filePath in $files; do
  cd $currentDir
  fileDir=$(dirname $filePath)
  cd $fileDir
  yarn
done
