import { useRef, useEffect } from 'react';

import $ from 'jquery';
import 'jquery-datetimepicker'
import 'jquery-datetimepicker/jquery.datetimepicker.css'

export default function Datetimepicker({ value, onChange }) {
  //refers to input (like id)
  const dateRef = useRef()

  //using a useEffect to generate render of component
  useEffect(() => {
    if (dateRef.current) {
      $(dateRef.current).datetimepicker({
        timepicker: false,
        format: 'm/d/Y',
        lang: 'fr',
        onChangeDateTime: (dp, dateRef) => {
          onChange(dateRef.val())
        }
      })
      return () => $(dateRef).datetimepicker('destroy')
    }
  }, [dateRef, onChange])
  
  return (
    <input ref={dateRef} type="text" value={value} onChange={onChange} />
  )
}