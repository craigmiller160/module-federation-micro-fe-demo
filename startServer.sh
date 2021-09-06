#!/bin/bash

rootDir=$(pwd)

cd server
echo "Starting Vanilla Parent"
yarn start:vanillaParent 1>/dev/null 2>/dev/null &
echo "Starting Global Store"
yarn start:globalStore 1>/dev/null 2>/dev/null &
echo "Starting React Child 1"
yarn start:reactChild1 1>/dev/null 2>/dev/null &
echo "Starting Vue Child 1"
yarn start:vueChild1 1>/dev/null 2>/dev/null &
echo "Starting Svelte Child 1"
yarn start:svelteChild1 1>/dev/null 2>/dev/null &
echo "Starting React Child 2"
yarn start:reactChild2 1>/dev/null 2>/dev/null &
echo "Starting Svelte Child 2"
yarn start:svelteChild2 1>/dev/null 2>/dev/null &

