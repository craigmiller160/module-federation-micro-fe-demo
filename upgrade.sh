#!/bin/bash

currentDir=$(pwd)

printErrors() {
  local IFS=$'\n'
  for error in $1; do
    if [[ $error == error* ]]; then
      echo $error
    fi
  done
}

doUpgrade() {
  dirs=$(ls "$currentDir/$1")
  for dirName in $dirs; do
    fullPath="$currentDir/$1/$dirName"
    dependencyMatch=$(cat "$fullPath/package.json" | grep "$2")
    if [[ "$dependencyMatch" != "" ]]; then
      echo "Upgrading $dirName"
      cd $fullPath
      errors=$(yarn upgrade $2 2>&1 >/dev/null)
      printErrors "$errors"
    else
      echo "Not upgrading $dirName"
    fi
  done
}

doUpgrade 'parents' "$1"
cd $currentDir
doUpgrade 'children' "$1"
cd $currentDir
doUpgrade 'utilities' "$1"