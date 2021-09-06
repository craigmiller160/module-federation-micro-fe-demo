#!/bin/bash

vanillaParentPid=$(sudo lsof -t -i:3000)
sudo kill $vanillaParentPid

globalStorePid=$(sudo lsof -t -i:3001)
sudo kill $globalStorePid

reactChild1Pid=$(sudo lsof -t -i:3002)
sudo kill $reactChild1Pid

vueChild1Pid=$(sudo lsof -t -i:3004)
sudo kill $vueChild1Pid

svelteChild1Pid=$(sudo lsof -t -i:3003)
sudo kill $svelteChild1Pid
