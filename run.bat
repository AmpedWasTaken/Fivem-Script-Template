@echo off
:main
cls
echo 1. Basic Fivem Script
echo 2. Nui Fivem Script
node src/index.js
ping localhost -n 5 > nul
goto main