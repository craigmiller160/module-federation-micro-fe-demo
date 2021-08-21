#!/bin/bash

currentDir=$(pwd)

function doUpgrade {
  dirs=$(ls "$currentDir/$1")
  for dirName in $dirs; do
    fullPath="$currentDir/$1/$dirName"
    dependencyMatch=$(cat "$fullPath/package.json" | grep "$2")
    if [[ "$dependencyMatch" != "" ]]; then
      echo "Upgrading $dirName"
      cd $fullPath
      # TODO how to further suppress error output
      yarn upgrade $2 1>/dev/null
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