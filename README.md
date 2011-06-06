# node-forrst

Simple node.js wrapper for the [Forrst.com API](http://forrst.com/api).

Work in progress...

## Installation

    npm install forrst

## Usage

This wapper is at the moment basically an extension of Node.js’s [http.get](http://nodejs.org/docs/v0.4.8/api/http.html#http.get)
method, below are 2 basic examples of how to use it:

### Methods with no parameters
    var forrst = require('forrst');
    
    forrst.stats(function(res){
      res.on('data', function(d) {
        process.stdout.write(d);
      });
      res.on('end', function(d) {
        console.log('\n\n[request completed]');
      });
    }).on('error', function(e) {
      console.error(e);
    });

Forrst methods that dont have parameters, such as [stats](http://forrst.com/api#m-stats) and 
[posts/all](http://forrst.com/api#m-posts-all) are called with only one argument on node-forrst, the callback
that works like a regular node.js http request callback.

### Methods with parameters
    var forrst = require('forrst');
    
    forrst.posts.list({post_type:'snap'}, function(res){
      console.log("headers: ", res.headers);
      res.on('data', function(d) {
        process.stdout.write(d);
      });
      res.on('end', function(d) {
        console.log('\n\n[request completed]');
      });
    }).on('error', function(e) {
      console.error(e);
    });

For all other methods the first argument is an object with the method parameters
and the second is the callback function. The method names use dots instead of slashes, so posts/list become posts.list

## Implemented Methods

  * [stats](http://forrst.com/api#m-stats)
  * [users.info](http://forrst.com/api#m-users-info)
  * [user.posts](http://forrst.com/api#m-user-posts)
  * [posts.all](http://forrst.com/api#m-posts-all)
  * [posts.show](http://forrst.com/api#m-posts-show)
  * [posts.list](http://forrst.com/api#m-posts-list)
  
## License

* MIT

## TODO / Roadmap

 * require from the developer a custom user-agent
 * add authenticated calls
 * flip the calls to https
