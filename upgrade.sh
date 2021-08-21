#!/bin/bash

function doUpgrade {
  dirs=$(ls $1)
  for dirName in $dirs; do
    fullPath="$1/$dirName"
    dependencyMatch=$(cat "$fullPath/package.json" | grep "$2")
    if [[ "$dependencyMatch" != "" ]]; then
      echo "Upgrading $dirName"
      cd $fullPath
      yarn upgrade $2 1>/dev/null
    else
      echo "Not upgrading $dirName"
    fi
  done
}

currentDir=$(pwd)
doUpgrade 'parents' "$1"
cd $currentDir
# TODO do upgrade others