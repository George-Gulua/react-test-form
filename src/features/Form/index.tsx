import { FieldConfig, FormData } from '@/types.ts'

import styles from './styles.module.scss'
import { Button, InputsGroup } from '@/shared/ui'

interface FormProps {
  config: FieldConfig[]
  formData: FormData
  onChange: (id: string, value: string) => void
}

const Form = ({ config, formData, onChange }: FormProps) => {
  const handleClick = () => {
    console.log(formData)
  }

  const isValid = config.every((field) => {
    if (field.required) {
      return formData[field.id] !== ''
    }
    return true
  })

  return (
    <div className={styles.form}>
      <img className={styles.image} src="/girl-image.png" alt="form image" />
      <InputsGroup config={config} formData={formData} onChange={onChange} />
      <Button disabled={!isValid} className={styles.button} onClick={handleClick}>
        Submit
      </Button>
    </div>
  )
}

export { Form }
