export default function InputComponent({type, id, label, value, onChange }) {

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  )
}
