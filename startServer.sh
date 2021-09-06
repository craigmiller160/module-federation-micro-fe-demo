#!/bin/bash

rootDir=$(pwd)

cd server
yarn start:vanillaParent & 1>/dev/null 2>/dev/null
yarn start:reactChild1 & 1>/dev/null 2>/dev/null
yarn start:globalStore & 1>/dev/null 2>/dev/null
yarn start:vueChild1 & 1>/dev/null 2>/dev/null
yarn start:svelteChild1 & 1>/dev/null 2>/dev/null
yarn start:reactChild2 & 1>/dev/null 2>/dev/null

