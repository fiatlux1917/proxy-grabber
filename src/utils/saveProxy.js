import { saveAs } from 'file-saver'

const getSaveFormat = proxies => {
  return proxies.map(proxy => `${proxy.ip}:${proxy.port}`)
}

export const saveProxy = proxies => {
  const saveResult = getSaveFormat(proxies).join('\n')
  const data = new Blob([saveResult], { type: 'text/plain' })
  saveAs(data, 'proxy.txt')
}
