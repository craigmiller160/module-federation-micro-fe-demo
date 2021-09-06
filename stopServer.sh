#!/bin/bash

echo "Killing Vanilla Parent"
vanillaParentPid=$(sudo lsof -t -i:3000)
sudo kill $vanillaParentPid

echo "Killing Global Store"
globalStorePid=$(sudo lsof -t -i:3001)
sudo kill $globalStorePid

echo "Killing React Child 1"
reactChild1Pid=$(sudo lsof -t -i:3002)
sudo kill $reactChild1Pid

echo "Killing Vue Child 1"
vueChild1Pid=$(sudo lsof -t -i:3004)
sudo kill $vueChild1Pid

echo "Killing Svelte Child 1"
svelteChild1Pid=$(sudo lsof -t -i:3003)
sudo kill $svelteChild1Pid

echo "Killing React Child 2"
reactChild2Pid=$(sudo lsof -t -i:3005)
sudo kill $reactChild2Pid

echo "Killing Svelte Child 2"
svelteChild2Pid=$(sudo lsof -t -i:3006)
sudo kill $svelteChild2Pid

echo "Killing Vue Child 2"
vueChild2Pid=$(sudo lsof -t -i:3007)
sudo kill $vueChild2Pid
