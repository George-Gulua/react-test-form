import { emailPattern, INPUT_TYPES } from '@/shared/lib'
import cn from 'classnames'

import styles from './styles.module.scss'

interface InputProps {
  id: string
  type: string
  label: string
  value: string
  onChange: (event) => void
  required?: boolean
}

const Input = ({ id, type, label, value, onChange, required = false }: InputProps) => (
  <div className={styles.InputContainer}>
    <label className={styles.label}>{label}</label>
    <input
      id={id}
      className={cn(styles.input, {
        [styles.outLineError]: type === 'inputEmail' && value && !emailPattern.test(value),
      })}
      placeholder="Enter value"
      type={INPUT_TYPES[type]}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
)

export { Input }
