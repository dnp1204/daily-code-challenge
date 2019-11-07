/**
 * Company: Microsoft.
 *
 * Implement a URL shortener with the following methods:
 * shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
 * restore(short), which expands the shortened string into the original url. If no such shortened
 * string exists, return null.
 *
 * Hint: What if we enter the same URL twice?
 */
const crypto = require('crypto');

class UrlShortener {
  constructor() {
    this.shortToUrlMap = {};
    this.urls = {};
    this.hash = crypto.createHash('sha256');
    this.prefix = 'http://urlshort.li/';
  }

  shorten(url) {
    if (this.urls[url]) {
      return this.urls[url];
    }
    const hashUrl = this.hash
      .update(url)
      .digest('hex')
      .substring(0, 6);
    this.shortToUrlMap[hashUrl] = url;
    this.urls[url] = this.prefix + hashUrl;
    return this.prefix + hashUrl;
  }

  restore(url) {
    return this.shortToUrlMap[url.replace(this.prefix, '')] || null;
  }
}
