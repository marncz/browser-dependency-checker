# What's that?

This is a small pure Javascript function to check users' web browser version and either follow or redirect based on the
version number. 


# Installation
Only include webdepcheck.js and webdepcheck.css files, you can include remote files from git:

    <script src="myscripts.js"></script>
    <link rel="stylesheet" type="text/css" href="theme.css">



# Usage

### Basic usage
```browserDepCheck ( { "Chrome" : 48, "Mozilla" : 5 } );```


List of web browse names:

* Chrome
* Mozilla 

### Redirect on fail
```browserDepCheck ( { "Chrome" : 48, "Mozilla" : 5, "fail": "/failed" } );```

### Redirect on success
```browserDepCheck ( { "Chrome" : 48, "Mozilla" : 5, "success": "/success" } );```
