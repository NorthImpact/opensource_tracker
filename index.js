var github = require('./src/github');


//subscribe to github issues

github.pubsub('subscribe', 'issues');
//github.webhook('unsubscribe', 'issues');

