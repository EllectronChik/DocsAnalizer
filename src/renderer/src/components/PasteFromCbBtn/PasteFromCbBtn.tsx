import { FC, HTMLProps } from 'react'
import classes from './PasteFromCbBtn.module.scss'
import PasteSvg from '@renderer/assets/images/paste.svg'

interface IProps extends HTMLProps<HTMLButtonElement> {
  onClick: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
}

const PasteFromCbBtn: FC<IProps> = ({ onClick, type = 'button', ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes.container}${props.className ? ' ' + props.className : ''}`}
      {...props}
    >
      <img className={classes.image} src={PasteSvg} alt="Paste from clipboard" />
      <p className={classes.text}>Paste .docx file from clipboard</p>
    </button>
  )
}

export default PasteFromCbBtn
