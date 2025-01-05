import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button = ({ className, children, ...props }: ButtonProps) => (
  <button className={cn(styles.button, className)} {...props}>
    {children}
  </button>
)

export { Button }
