import fs from 'fs';
import path from 'path';

class FileHandler {
  async save(fileName: string, dataFormat: string, data: string): Promise<void> {
    const pathDir = path.join(process.cwd(), 'webpage', `${fileName}.${dataFormat}`);
    await fs.promises.mkdir(path.dirname(pathDir), { recursive: true });

    const content = typeof data === 'string' ? data : JSON.stringify(data);
    await fs.promises.writeFile(pathDir, content);
  }
}

const fileHandler = new FileHandler();
export default fileHandler;
