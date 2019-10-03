import { saveAs } from 'file-saver'

const getSaveFormat = proxies => {
  return proxies.map(proxy => `${proxy.ip}:${proxy.port}`)
}

export const saveProxy = (proxies, saveTo = 'proxy.txt') => {
  const result = getSaveFormat(proxies).join('\n')
  const data = new Blob([result], { type: 'text/plain' })
  saveAs(data, saveTo)
}
