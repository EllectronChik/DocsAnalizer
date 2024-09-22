import { FC, useContext, useEffect } from 'react'
import classes from './StartPage.module.scss'
import ErrorBox from '../ErrorBox/ErrorBox'
import { FileUriContext } from '../ContextsProvider/ContextsProvider'
import PasteFromCbBtn from '../PasteFromCbBtn/PasteFromCbBtn'

const StartPage: FC = () => {
  const { fileUri, setFileUri } = useContext(FileUriContext)

  const fetchClipboard = async (): Promise<void> => {
    const pathOrUndefined = await window.api.readClipboard()
    setFileUri(pathOrUndefined)
  }

  useEffect(() => {
    document.addEventListener('paste', fetchClipboard)
    return (): void => document.removeEventListener('paste', fetchClipboard)
  }, [])

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Document Analizer</h1>
      <ErrorBox show={fileUri === undefined}>
        <p className={classes.text}>
          The data on the clipboard is not a .docx file or the program was unable to recognize it.
          Please copy the required .docx file or drag and drop it into the window below.
        </p>
      </ErrorBox>
      <div className={classes.buttons}>
        <PasteFromCbBtn onClick={fetchClipboard} />
        <p className={classes.or}>or</p>
        <PasteFromCbBtn onClick={fetchClipboard} />
      </div>
    </div>
  )
}

export default StartPage
