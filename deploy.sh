yarn build
git checkout gh-pages
rm -rf *.json *.js *.lock *.sh
mv dist/* ./
rm -rf dist
git push
git checkout -