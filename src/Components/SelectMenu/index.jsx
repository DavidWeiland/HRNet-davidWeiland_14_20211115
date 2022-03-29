import { states, department } from '../../Data'
import SelectOptions from '../SelectOptions'

export default function SelectMenu ({id, label, onChange}) {

  const options = id === 'state' ? states : department
  
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} onChange={onChange}>
        {options.map(({ index, name, abbreviation }) => (
          <SelectOptions
            key={`${name}-${index}`}
            value={abbreviation ?? name}
            text={name}
          />
        ))}
      </select>
    </div>
  )
}
