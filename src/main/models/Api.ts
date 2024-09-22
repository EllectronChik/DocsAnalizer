export interface Api {
  readClipboard: () => Promise<string>
}
