import { useRef, useEffect } from 'react';
import $ from 'jquery';
import 'jquery-datetimepicker'
import 'jquery-datetimepicker/jquery.datetimepicker.css'

export default function Datetimepicker({ value, onChange }) {
  const dateRef = useRef()
  const newDateRef = useRef()

  useEffect(() => {
    if (dateRef.current) {
      const d = $(dateRef.current).datetimepicker({ timepicker: false, format: 'm/d/Y', lang:'fr', onChangeDateTime:(dp, dateRef)=>{onChange(dateRef.val())}})
      newDateRef.current = d
      return () => $(dateRef).datetimepicker('destroy')
    }
  }, [dateRef, onChange])
  
  return (
    <input ref={dateRef} type="text" value={value} onChange={onChange} />
  )
}