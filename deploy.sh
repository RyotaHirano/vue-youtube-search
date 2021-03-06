#!/bin/bash -e

echo "Start: Deploy github page."

# build
yarn run build
echo "yarn run build finish."
rm -rf docs
echo "remove docs finish."
mkdir docs
echo "create docs finish."
chmod -R 755 docs
cp -f -R dist/* docs
echo "copy dist to docs finish."

git config --global user.name  "CircleCI"
git config --global user.email "circleci@gh-pages.com"

if git diff --no-ext-diff --quiet --exit-code; then
  echo "No changes."
else
  echo "Has changes. "
  git add .
  git commit -m '[ci skip] build GitHubPaged on circle ci'
  git push origin HEAD -f
fi

echo "End: Deploy github page."
