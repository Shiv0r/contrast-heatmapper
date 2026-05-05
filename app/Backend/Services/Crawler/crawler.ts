import { PuppeteerCrawler, Dataset } from '@crawlee/puppeteer';
import { minify } from 'html-minifier-terser';
import fileHandler from '../../Helper/fileHandler';
import urlHandler from '../../Helper/urlHandler';

class Crawler {
  async init(url: string): Promise<void> {
    this.processHTML(url);
  }

  private async processHTML(url: string): Promise<void> {
    const crawler = new PuppeteerCrawler({
      async requestHandler({ request, page, log }) {
        const title = await page.title();
        const fileName = await urlHandler.getHost(request.loadedUrl ?? 'index');

        let htmlContent = await page.content();
        htmlContent = await minify(htmlContent, {
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeComments: true,
          minifyCSS: false,
          minifyJS: false,
        });
        fileHandler.save(fileName, 'html', htmlContent);

        log.info(`Title of ${request.loadedUrl} is '${title}'`);
        await Dataset.pushData({ title, html: htmlContent, url: request.loadedUrl });
      },
      maxConcurrency: 1,
    });

    await crawler.run([await urlHandler.normalizeUrl(url)]);
  }

  private async extractCSS(html: string): Promise<void> {}
}

const crawler = new Crawler();
export default crawler;
