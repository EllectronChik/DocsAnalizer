import { ElectronAPI } from '@electron-toolkit/preload'
import { Api } from '../models/Api'

declare global {
  interface Window {
    electron: ElectronAPI
    api: Api
  }
}
