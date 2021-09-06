#!/bin/bash

rootDir=$(pwd)

cd server
yarn start:vanillaParent & # 1>/dev/null 2>/dev/null

