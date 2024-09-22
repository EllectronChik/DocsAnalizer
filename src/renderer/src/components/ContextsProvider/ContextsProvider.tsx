import { createContext, FC, PropsWithChildren, useState } from 'react'

interface FileUriContextType {
  fileUri: string | undefined
  setFileUri: (fileUri: string) => void
}

const FileUriContext = createContext<FileUriContextType>({} as FileUriContextType)

const ContextsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [fileUri, setFileUri] = useState('')

  return (
    <FileUriContext.Provider value={{ fileUri, setFileUri }}>{children}</FileUriContext.Provider>
  )
}

export { FileUriContext }
export default ContextsProvider
