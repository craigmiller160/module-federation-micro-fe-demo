#!/bin/bash

currentDir=$(pwd)
RED='\033[0;31m'
NC='\033[0m'

printErrors() {
  local IFS=$'\n'
  for error in $1; do
    if [[ $error == error* ]]; then
      printf "${RED}$error${NC}\n"
    fi
  done
}

doUpgrade() {
  dirs=$(ls "$currentDir/$1")
  for dirName in $dirs; do
    fullPath="$currentDir/$1/$dirName"
    dependencyMatch=$(cat "$fullPath/package.json" | grep "$2" | grep -v "name\":")
    if [[ "$dependencyMatch" != "" ]]; then
      echo "Upgrading $2 in $dirName"
      cd $fullPath
      errors=$(yarn upgrade $2 2>&1 >/dev/null)
      printErrors "$errors"
    else
      echo "Not upgrading $2 in $dirName"
    fi
  done
}

if [[ $# -ne 1 ]]; then
  echo "Must provide name of dependency to upgrade"
  exit 1
fi

doUpgrade 'parents' "$1"
cd $currentDir
doUpgrade 'children' "$1"
cd $currentDir
doUpgrade 'utilities' "$1"
exit 0