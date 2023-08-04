export const asyncQuerySelector = (selector, parent) =>
  new Promise((resolve) => {
    const target = document.querySelector(selector);
    if (target) {
      resolve(target);
      return;
    }
    const observer = new MutationObserver((mutations) => {
      nodes: for (const { addedNodes } of mutations) {
        for (const node of addedNodes) {
          if (node.localName === "title") {
            resolve(node);
            observer.disconnect();
            break nodes;
          }
        }
      }
    });
    observer.observe(document.querySelector(parent), {
      childList: true,
    });
  });

export const updateFavicon = async (url) => {
  const reader = new FileReader();
  reader.readAsDataURL(await (await fetch(chrome.runtime.getURL(url))).blob());
  reader.onload = () => {
    document
      .querySelector('link[rel="shortcut icon"')
      .setAttribute("href", reader.result);
  };
};

export const updateTitle = async (pattern, replacement) => {
  const title = await asyncQuerySelector("title", "head");
  const update = () => {
    const { textContent } = title;
    if (pattern.test(textContent)) {
      document.title = textContent.replace(pattern, replacement);
    }
  };
  update();
  const observer = new MutationObserver(update);
  observer.observe(title, {
    subtree: true,
    characterData: true,
    childList: true,
  });
};
