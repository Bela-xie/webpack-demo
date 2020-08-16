yarn build &&
git checkout gh-pages &&
rm -rf *.html *.js *.css &&
mv dist/* ./ &&
rm -rf dist &&
ga . &&
git commit -m 'update' &&
git push &&
git checkout -