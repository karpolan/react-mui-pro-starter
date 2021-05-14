/**
 * Helper to open links
 * @function openUrl
 * @param {string} urlToOpen - url to navigate
 * @param {boolean} [openInNewTab] - new/current tab switch, links are opened in new tab by default
 * @param {boolean} [setFocusToNewTab] - when true, the new opened tab will receive focus
 */
export function openUrl(urlToOpen, openInNewTab = true, setFocusToNewTab = true) {
  // Todo: make verification about internal SPA links
  const tab = window.open(urlToOpen, openInNewTab ? '_blank' : null);
  setFocusToNewTab && tab.focus();
}
