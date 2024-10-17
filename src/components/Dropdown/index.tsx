import './Dropdown.css'

interface DropdownProps {
  label: string
  required: boolean
  value: string
  handleChange: (value: string) => void
  itens: string[]
}

const Dropdown = ({ label, required, value, itens, handleChange } : DropdownProps) => {
  
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange(event.target.value)
  }
  
  return (
    <div className='dropdown' >
      <label>{label}</label>
      <select 
        required={required}
        onChange={handleSelectChange}
        value={value}>
          <option value=""></option>
        {itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default Dropdown