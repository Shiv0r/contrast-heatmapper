import path from 'path';

class UrlHandler {
  async getHost(loadedUrl: string): Promise<string> {
    const host = new URL(loadedUrl).host;
    return host;
  }

  async normalizeUrl(url: string): Promise<string> {
    let normalizedUrl: string = url;

    if (!normalizedUrl.startsWith('www.')) {
      normalizedUrl = `www.${url}`;
    }
    if (!normalizedUrl.startsWith('https://') || !normalizedUrl.startsWith('http://')) {
      normalizedUrl = `https://${url}`;
    }

    return normalizedUrl;
  }
}

const urlHandler = new UrlHandler();
export default urlHandler;
