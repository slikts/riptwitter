chrome.runtime.sendMessage({}, async () => {
  const { updateFavicon, updateTitle } = await import(
    chrome.runtime.getURL('src/utils.js')
  )

  updateFavicon('icons/twitter.svg')
  updateTitle(/\bX$/, 'Twitter')
})
