#!/bin/bash -e

echo "Start: Deploy github page."

# build
yarn run build
rm -rf docs
mkdir docs
chmod -R 755 docs
cp -f -R dist/* docs

git config --global user.name  "CircleCI"
git config --global user.email "circleci@gh-pages.com"
git add .
git commit -m '[ci skip] build GitHubPaged on circle ci'
git push origin HEAD -f

echo "End: Deploy github page."
