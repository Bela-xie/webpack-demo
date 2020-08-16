yarn build &&
git add . &&
git commit -m 'update' &&
git checkout gh-pages &&
rm -rf *.html *.js *.css &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -m 'update' &&
git push &&
git checkout -