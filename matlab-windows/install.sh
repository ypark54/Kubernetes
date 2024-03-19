#!/bin/bash
wine setup.exe -inputFile installer_input.txt
sleep 5
# Set the DISPLAY environment variable
export DISPLAY=:0
Xvfb :0 -screen 0 1024x768x16 &
chmod +x setup.exe
sleep 5

# Run the Windows program with wine
wine setup.exe -inputFile installer_input.txt &
PROCESS_NAME="wineserver"
sleep 20
while pgrep $PROCESS_NAME > /dev/null; do
   echo "Process $PROCESS_NAME is still running..."
   sleep 1  # Wait for 1 second before checking again
done
