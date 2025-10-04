#!/bin/bash

# Create the output directories
mkdir -p out/css
mkdir -p out/js

# Minify HTML files
minify -o out/index.html index.html
minify -o out/about.html about.html
minify -o out/why.html why.html

# Minify CSS files
minify -o out/css/main.css css/main.css
minify -o out/css/scroll-indicator.css css/scroll-indicator.css

# Minify JS files
minify -o out/js/scroll-indicator.js js/scroll-indicator.js

cp assets/* out/assets/
echo "Minified files are ready in the 'out' directory."
