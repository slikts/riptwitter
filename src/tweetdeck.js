const { updateFavicon, updateTitle } = require('./utils')

chrome.runtime.sendMessage({}, async () => {
  updateFavicon('icons/tweetdeck.svg')
  updateTitle(/\bXPro$/, 'TweetDeck')
})
