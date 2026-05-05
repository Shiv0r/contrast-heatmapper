import crawler from './crawler';

(async (): Promise<void> => {
  await crawler.init('crawlee.dev');
})();
