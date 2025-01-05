import { useState } from 'react'
import { FormData } from '@/shared/types'
import { config } from './lib.ts'

import styles from './styles.module.scss'
import { Form } from '@/features/Form'

const App = () => {
  const [formData, setFormData] = useState<FormData>(
    Object.fromEntries(config.map(({ id, defaultValue }) => [id, defaultValue || ''])) as FormData,
  )

  const handleFormChange = (id: string, value: string) => setFormData({ ...formData, [id]: value })

  return (
    <div className={styles.app}>
      <Form config={config} formData={formData} onChange={handleFormChange} />
    </div>
  )
}

export { App }
