import { PuppeteerCrawler, Dataset } from '@crawlee/puppeteer';
import fileHandler from '../../Helper/fileHandler';
import getUrlName from '../../Helper/getUrlName';

class Crawler {
  async init(url: string) {
    const crawler = new PuppeteerCrawler({
      async requestHandler({ request, page, log }) {
        const title = await page.title();
        const fileName = await getUrlName(request.loadedUrl ?? 'index');

        const htmlContent = await page.content();
        fileHandler.save(fileName, 'html', htmlContent);

        log.info(`Title of ${request.loadedUrl} is '${title}'`);
        await Dataset.pushData({ title, html: htmlContent, url: request.loadedUrl });
      },
      maxConcurrency: 1,
    });

    await crawler.run([url]);
  }
}

const crawler = new Crawler();
export default crawler;
