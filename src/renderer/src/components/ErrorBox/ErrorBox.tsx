import { FC, HTMLProps } from 'react'
import classes from './ErrorBox.module.scss'
import ErrorSvg from '@renderer/assets/images/error.svg'

interface IProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
  show?: boolean
}

const ErrorBox: FC<IProps> = ({ children, show, ...props }) => {
  return (
    <div
      className={`${classes.container}${show ? ' ' + classes.show : ''}${props.className ? ' ' + props.className : ''}`}
      {...props}
    >
      <img className={classes.image} src={ErrorSvg} alt="Error" />
      {children}
    </div>
  )
}

export default ErrorBox
