import './Field.css'

interface FieldProps {
  handleChange: (value: string) => void
  placeholder: string
  label: string
  value: string
  required?: boolean
  fieldType?: string
}

const Field = ({
    label, 
    placeholder, 
    value, 
    fieldType = 'text', 
    required = false, 
    handleChange
  } : FieldProps) => {
  
  const placeholderChanged = `${placeholder}...`

  // let value = 'Vinicius Farias'

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value)
  }

  return (
    <div className={`field field-${fieldType}`}>
      <label>{label}</label>
      <input 
        onChange={handleFieldChange} 
        placeholder={placeholderChanged} 
        required={required} 
        type={fieldType}
        value={value} />
    </div>
  )
}

export default Field