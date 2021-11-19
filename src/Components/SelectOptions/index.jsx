export default function SelectOptions({ value, text }) {
  
  return (
    <option value={value} text={text}>
      {text}
    </option>
  )
}