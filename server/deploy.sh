#!/bin/bash
set -e

### Configuration ###

SERVER=
APP_DIR=
KEYFILE=
REMOTE_SCRIPT_PATH=


run scp $KEYARG package.json package-lock.json $SERVER:$REMOTE_SCRIPT_PATH
run scp $KEYARG -r dist $SERVER:$REMOTE_SCRIPT_PATH

echo
echo "---- Running deployment script on remote server ----"
run ssh $KEYARG $SERVER bash $REMOTE_SCRIPT_PATH/server.sh