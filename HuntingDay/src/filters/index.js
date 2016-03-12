/**
 * get title from file name
 *
 * @param title
 * @returns {string}
 */
function onlyTitle(title) {
    // return title.replace(/^\d{4}-\d{1,2}-\d{1,2}-(.+?)\.md$/, '$1');
    return title.replace(/\.md$/, '')
                .replace(/^\d{4}-\d{1,2}-\d{1,2}-/, '');
}

/**
 * get date from file name
 *
 * @param title
 * @returns {array|null}
 */
function onlyPublishDate(title) {
    // return /^\d{4}-(?:0?[1-9]|1[0-2])-\d{1,2}/.exec(title);
    return /^\d{4}-\d{1,2}-\d{1,2}/.exec(title);
}


export {
  onlyTitle,
  onlyPublishDate
}