export const readClipboard = (): string | undefined => {
  const { clipboard } = require('electron')

  const formats = clipboard.availableFormats()
  let filePath: string

  if (formats.includes('public.file-url')) {
    const buffer = clipboard.readBuffer('public.file-url')
    filePath = decodeURIComponent(buffer.toString('utf8').replace('file://', ''))
  } else if (formats.includes('text/uri-list')) {
    filePath = clipboard.read('text/uri-list').replace('file://', '').trim()
  } else {
    return undefined
  }

  if (!filePath.endsWith('.docx')) {
    return undefined
  }
  return filePath
}
