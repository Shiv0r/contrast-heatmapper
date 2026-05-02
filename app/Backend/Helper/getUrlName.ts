import path from 'path';

export default async function getUrlName(loadedUrl: string): Promise<string> {
  const url = new URL(loadedUrl);
  const urlPath = url.pathname;

  const fileName = urlPath.endsWith('/')
    ? path.basename(urlPath.slice(0, -1))
    : path.basename(urlPath);

  return fileName;
}
