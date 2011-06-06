//defaults
var defaults = {
    host: "forrst.com"
  , endpoint: "/api/v2/"
};

//libraries
var   http = require('http')
    , querystring = require('querystring');

//private functions
function forrstGet(method, params, callback){
  var path = defaults.endpoint + method;
  if (typeof params !== 'object') { 
    throw new TypeError('Method '+method.replace('/','.')+
                        ' expects an object as the first argument. Found '+
                        (typeof params)+' instead.');
  }
  path = path + "?" + querystring.stringify(params);
  return http.get({ host: defaults.host, path: path}, callback);
}

//exports
this.stats = forrstGet.bind(null, "/stats/", {});
this.users = {
  info: forrstGet.bind(null, "users/info")
};
this.user = {
  posts: forrstGet.bind(null, "user/posts")
};
this.posts = {
    all: forrstGet.bind(null, "posts/all/", {})
  , show: forrstGet.bind(null, "posts/show")
  , list: forrstGet.bind(null, "posts/list")
};