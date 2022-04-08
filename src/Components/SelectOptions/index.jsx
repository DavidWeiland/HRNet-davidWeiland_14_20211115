export default function SelectOptions({ value, text }) {
  //build with props
  return (
    <option value={value} text={text}>
      {text}
    </option>
  )
}