# Auckland PSI 

Developement repository

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```

## Setup to deploy to Github Pages

Upgrade webpack set up:

1. Install gh-pages module

``` bash
npm install gh-pages --save-dev
```

2. Add to package.json

``` js
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

3. Alter /config/index.js

``` js
build: {
    publicPath: '/qclot/'
}
```

4. Run deply

``` bash
npm run build
npm run deploy
```