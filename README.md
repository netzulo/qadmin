# Qadmin

| Branch  | Linux Deploy | Windows Deploy |
| ------------- | ------------- |  ------------- |
| master  | [![Build Status](https://travis-ci.org/netzulo/qadmin.svg?branch=master)](https://travis-ci.org/netzulo/qadmin)  | [![Build status](https://ci.appveyor.com/api/projects/status/qrb3o3qdeg3qv9eq/branch/master?svg=true)](https://ci.appveyor.com/project/netzulo/qadmin/branch/master)  |
| devel  | [![Build Status](https://travis-ci.org/netzulo/qadmin.svg?branch=devel)](https://travis-ci.org/netzulo/qadmin)  | [![Build status](https://ci.appveyor.com/api/projects/status/qrb3o3qdeg3qv9eq/branch/devel?svg=true)](https://ci.appveyor.com/project/netzulo/qadmin/branch/devel)  |

## Tested versions 

- node
- iojs
- lts/* _(not supported)_
- 8 
- 7
- 6
- 5 _(not supported)_
- 4 _(not supported)_


## NPM install

```
npm install
```

## Compile website

_This command will result on new folder **dist** with website can be copied to apache or nginx web server_

```
npm run build
```

## Test Unitaries

```
npm test
```

## Test Functionals

```
npm run e2e
```

---