#!/bin/bash
set -e

echo "==> Configuring Bundler cache path"
# Cloudflare Pages specifically caches the vendor/bundle folder. 
# We MUST force Bundler to install gems here so they are preserved between builds.
bundle config set --local path 'vendor/bundle'

echo "==> Installing dependencies"
bundle install

echo "==> Building Jekyll site"
# Use production environment for optimized builds
JEKYLL_ENV=production bundle exec jekyll build
