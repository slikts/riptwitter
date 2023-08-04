const { updateFavicon, updateTitle } = require("./utils");

chrome.runtime.sendMessage({}, async () => {
  updateFavicon("icons/twitter.svg");
  updateTitle(/\bX$/, "Twitter");
});
