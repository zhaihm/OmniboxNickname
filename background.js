// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    let map = {
      'google': 'https://www.google.com',
      'bing': 'https://www.bing.com/',
      'so': 'https:///www.stackoverflow.com/',
      'github': 'https://www.github.com/'
    };
    
    if (map[text.toLowerCase()]) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentTab = tabs[0];
        chrome.tabs.update(currentTab.id, {url: map[text.toLowerCase()]});
      });
    }
  });
