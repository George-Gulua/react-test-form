type InputType = 'inputText' | 'inputEmail' | 'inputPassword'

interface FieldConfig {
  id: string
  type: InputType
  label: string
  defaultValue?: string
  required?: boolean
}

type FormData = Record<string, string>

export { InputType, FieldConfig, FormData }
