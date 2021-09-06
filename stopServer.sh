#!/bin/bash

vanillaParentPid=$(sudo lsof -t -i:3000)
sudo kill $vanillaParentPid
