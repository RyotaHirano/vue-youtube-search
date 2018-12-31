#!/bin/bash -e

# build
yarn run build
mkdir -p docs
chmod -R 755 docs
cp -f -R dist/* docs

git config --global user.name  "CircleCI"
git config --global user.email "circleci@gh-pages.com"
git add .
git commit -m '[ci skip] build GitHubPaged on circle ci'
git push origin HEAD -f

echo "Deploy github page."