#!/bin/bash

# Create the output directory
mkdir -p out/css

# Minify HTML files
minify -o out/index.html index.html
minify -o out/about.html about.html

# Minify CSS files
minify -o out/css/main.css css/main.css

echo "Minified files are ready in the 'out' directory."
