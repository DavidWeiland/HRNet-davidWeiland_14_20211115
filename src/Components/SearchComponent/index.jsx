
export default function SearchComponent({ type, id, label, value, onChange }) {

  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  )
}
