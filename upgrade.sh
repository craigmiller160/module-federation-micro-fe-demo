#!/bin/bash

currentDir=$(pwd)
RED='\033[0;31m'
NC='\033[0m'

printErrors() {
  local IFS=$'\n'
  for error in $1; do
    if [[ $error == errors* ]]; then
      printf "${RED}$error${NC}\n"
    fi
  done
}

runCommand() {
  errors=$($1 2>&1 >/dev/null)
  echo "$errors" # TODO delete this
  printErrors "$errors"
}

# TODO re-usable function for wrapping error handling of commands

replaceYalcWithReal() {
  echo "Removing yalc version of $2 in $dirName"
}

upgradeDependency() {
  echo "Upgrading $2 in $1"
  runCommand "yarn upgrade $2"
}

# TODO split this into functions
checkAndDoUpgrade() {
  # TODO change the log output to group log output for specific directories
  dirs=$(ls "$currentDir/$1")
  for dirName in $dirs; do
    fullPath="$currentDir/$1/$dirName"
    dependencyMatch=$(cat "$fullPath/package.json" | grep "$2" | grep -v "name\":")
    yalcMatch=$(echo "$dependencyMatch" | grep "yalc")

    cd $fullPath

    if [[ "$yalcMatch" != "" ]]; then
      replaceYalcWithReal "$dirName" "$2"
    elif [[ "$dependencyMatch" != "" ]]; then
      upgradeDependency "$dirName" "$2"
    else
      echo "Not upgrading $2 in $dirName"
    fi
  done

}

if [[ $# -ne 1 ]]; then
  echo "Must provide name of dependency to upgrade"
  exit 1
fi

#checkAndDoUpgrade 'parents' "$1"
#cd $currentDir
#checkAndDoUpgrade 'children' "$1"
#cd $currentDir
checkAndDoUpgrade 'utilities' "$1"
exit 0