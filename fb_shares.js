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

var promisedCounts = [];

function afterIth(i, ithResult) {
  console.log(links.links[i] + ',' + ithResult);
  if (i + 1 < links.links.length) {
      promisedCounts[i + 1] = createCountPromise(links.links[i + 1]);
      promisedCounts[i + 1].then(function(count) {
      afterIth(i + 1, count).call();
    });
  }
}

promisedCounts[0] = createCountPromise(links.links[0]);
promisedCounts[0].then(function(count) {
  afterIth(0, count).call();
});
