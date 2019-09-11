#!/bin/sh -l

echo "Installing dependencies"
sh -c "npm install"

echo "Building production release"
sh -c "npm run build"

echo "Deploying to firebase"
sh -c "npx firebase deploy $* --token $FIREBASE_AUTH_TOKEN"
