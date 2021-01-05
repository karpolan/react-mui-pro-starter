import { TITLE_PRIVATE } from '../consts';

/**
 * Centralized place in the App to update document.title
 */
function updateDocumentTitle(title = '') {
  if (title) {
    document.title = `${title} - ${TITLE_PRIVATE}`;
    return;
  }
  document.title = TITLE_PRIVATE;
}

export { updateDocumentTitle };
