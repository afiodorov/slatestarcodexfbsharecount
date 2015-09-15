var Promise = require('promise');
var links = require('./links');
var phantom = require('phantom');

var options = {
  'load-images': 'no'
};

var createCountPromise = function(link) {
  return new Promise(function(resolve, reject) {
    phantom.create(function (ph) {
      ph.createPage(function (page) {
        page.open(link, function (status) {
          page.evaluate(function() {
            try {
              return document.getElementsByClassName('share-count')[1].innerHTML.toString();
            } catch(ignore) {}

            return 0;
          }, function (result) {
            resolve(result);
            ph.exit();
          });
        });
      });
    }, options);
  });
};

function onIthShareCount(i, ithResult) {
  console.log(links.links[i] + ',' + ithResult);
  if (i + 1 < links.links.length) {
      createCountPromise(links.links[i + 1]).then(function(count) {
      onIthShareCount(i + 1, count).call();
    });
  }
}

createCountPromise(links.links[0]).then(function(count) {
  onIthShareCount(0, count).call();
});
