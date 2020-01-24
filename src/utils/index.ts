import { saveAs } from 'file-saver';

const typeFile: string = 'text/plain';

export const saveToTxt = (proxies: string, fileName: string = 'proxy.txt') => {
  const data = new Blob([proxies], { type: typeFile });
  saveAs(data, fileName);
};
