var links = require('./links');
var jsdom = require('jsdom');
var localSotrage = require('node-storage-shim');

links.links.forEach(function(link) {
  jsdom.env({
    url: link,
    features: {
      FetchExternalResources: ['script'],
      ProcessExternalResources: ['script'],
      SkipExternalResources: 'https:\/\/bakkot\.github\.io\/SlateStarComments\/ssc\.js'
    },
    done: function(errors, win) {
      if (errors) {
        console.log('error ' + link);
        console.log(errors);
        return;
      }
      console.log(win.document.body.innerHTML);
      console.log(win.document.getElementsByClassName('share-count'));
    }
  });

});

