import { Fragment } from 'react'
import { FieldConfig, FormData } from '@/types.ts'
import { Input } from '@/shared/ui'

import styles from './styles.module.scss'

interface InputsGroupProps {
  config: FieldConfig[]
  formData: FormData
  onChange: (id: string, value: string) => void
}

const InputsGroup = ({ config, formData, onChange }: InputsGroupProps) => (
  <div className={styles.inputsGroup}>
    {config.map(({ id, type, label, required }) => (
      <Fragment key={id}>
        <Input
          id={id}
          type={type}
          label={label}
          value={formData[id]}
          onChange={(event) => onChange(id, event.target.value)}
          required={required}
        />
      </Fragment>
    ))}
  </div>
)

export { InputsGroup }
