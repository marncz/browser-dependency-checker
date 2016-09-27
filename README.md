# What's that?

This is a small pure Javascript function to check users' web browser version and either follow or redirect based on the
version number. 


# Installation
Only include webdepcheck.js and webdepcheck.css files:

## Local
    <script src="browser-dep.js"></script>
    <link rel="stylesheet" type="text/css" href="browser-dep.css">

## Remote from GitHub
    <script src="https://raw.githubusercontent.com/marncz/browser-dependency-checker/master/browser-dep.js"></script>
    <link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/marncz/browser-dependency-checker/master/browser-dep.css">



# Usage

### Basic usage
```browserDepCheck ( { "Chrome" : 48, "Mozilla" : 5 } );```


List of web browse names:

* Opera
* Chrome
* Firefox
* MSIE 

### Redirect on fail
```browserDepCheck ( { "Chrome" : 48, "Mozilla" : 5, "fail": "/failed" } );```

### Redirect on success
```browserDepCheck ( { "Chrome" : 48, "Mozilla" : 5, "success": "/success" } );```
