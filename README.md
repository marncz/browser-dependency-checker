![](http://i.imgur.com/qdjbtJW.png)



# What's that?

This is a small pure Javascript function to check users' web browser version and either follow or redirect based on the
version number. 

# Demo
You can view a simple demo here: https://marncz.github.io/browser-dependency-checker/test.html

# Installation
It's easy! Only include browser-dep.js and browser-dep.js files:

## Local
    <script src="browser-dep.js"></script>
    <link rel="stylesheet" type="text/css" href="browser-dep.css">

## Remote from GitHub
    <script src="https://raw.githubusercontent.com/marncz/browser-dependency-checker/master/browser-dep.js"></script>
    <link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/marncz/browser-dependency-checker/master/browser-dep.css">



# Usage

## Get minimal required version based on used CSS rules

Without debug:

```getMinBrowserVersion( "Chrome",0 );```

With debug:

```getMinBrowserVersion( "Chrome",1 );```

Console output:

```align-content may not work properly on Chrome < 21```

```animation-name may not work properly on Chrome < 43```


## Check if user has a web browser with high enough version

```browserDepCheck ( { "Chrome" : 48, "Mozilla" : 5 } );```


List of web browse names:

* Opera
* Chrome
* Firefox
* MSIE 
* Safari

## Options
There is only one argument: a list of all the options, they are all optional, you can combine them

### Redirect on fail
```browserDepCheck ( { "Chrome" : 48, "Mozilla" : 5, "fail": "/failed" } );```

### Redirect on success
```browserDepCheck ( { "Chrome" : 48, "Mozilla" : 5, "success": "/success" } );```

### Debug mode
```browserDepCheck ( { "Chrome" : 48, "Mozilla" : 5, "debug": "1" } );```

