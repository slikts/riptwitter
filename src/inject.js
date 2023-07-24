// Set favicon
chrome.runtime.sendMessage({}, async () => {
  const reader = new FileReader()
  reader.readAsDataURL(
    await (await fetch(chrome.runtime.getURL('icons/favicon.ico'))).blob(),
  )
  reader.onload = () => {
    document
      .querySelector('link[rel="shortcut icon"')
      .setAttribute('href', reader.result)
  }
})
