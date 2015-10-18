var request = require('request'),
    credentials = require('../credentials.js');

var USER = 'gpestana';
var PASS = '*';
var GITHUB = 'https://'+credentials.user+':'+credentials.pass+'@api.github.com/';
var USER_AGENT = 'gpestana';
var CB = 'http://requestb.in/10k6vpl1';


var handler = function(err, res, body) {
  if(!err) {
    console.log(res.statusCode);
    console.log(body);
  } else {
    console.log('err');
    console.log(err);
  }
}

var pubsub = function(action, event) {
  var formData = {
    'hub.mode': action,
    'hub.topic': 'https://github.com/northimpact/wingrepo/events/'+event,
    'hub.callback': CB
  }

  var subs_opts = {
    url: GITHUB+'hub',
    formData: formData,
    headers: {  
      'User-Agent': USER_AGENT 
    }
  }

  request.post(subs_opts, handler);
}



exports.pubsub = webhook;
