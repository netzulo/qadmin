# QAdmin

![Downloads on Github](https://img.shields.io/github/downloads/netzulo/qadmin/total.svg)
![GitHub release](https://img.shields.io/github/release/netzulo/qadmin.svg)

#### CIs for linux/windows

Branch | Travis | Appveyor | CircleCI | CodeClimate
------ | ------ | -------- | -------- | -----------
master | ![](https://travis-ci.org/netzulo/qadmin.svg?branch=master) | ![](https://ci.appveyor.com/api/projects/status/qrb3o3qdeg3qv9eq/branch/master?svg=true) | ![](https://circleci.com/gh/netzulo/qadmin.svg?&style=shield&circle-token=57ba32cda619d90224450266ffc417b3f8bb6fb1ef7d1ccb28b365060298c19a) | [![Maintainability](https://api.codeclimate.com/v1/badges/7018b4a331e5ed5c5d4d/maintainability)](https://codeclimate.com/github/netzulo/qadmin/maintainability)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)


### NodeJs tested versions

* iojs
* lts/*
* v7.x
* v6.x
* v5.x _(not supported)_
* v4.x _(not supported)_

## Installation

* `git clone <repository-url>` this repository
* `cd qadmin`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

For NGINX web server you can use this example file , don't forget to create link at `sites-enabled` directory :

```
# config name: etc/nginx/sites-available/qadmin
# port HTTP : 83
# port HTTPS : 2443
# path HTML files : /your/path/dist
server {
       listen 83 default_server;
       listen [::]:83 default_server;

       server_name mydomainorip.tk;

       listen 2443 ssl http2 default_server;
       listen [::]:2443 ssl http2 default_server;
       include snippets/self-signed.conf;
       include snippets/ssl-params.conf;
       root /your/path/dist;
       index index.html;
       location / { 
          try_files $uri $uri/ /index.html;
       }
}
```


## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
