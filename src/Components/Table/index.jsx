import React, { useRef, useEffect } from "react";
import $ from 'jquery'
import "datatables.net/js/jquery.dataTables"
import "datatables.net-dt/js/dataTables.dataTables"
import 'datatables.net-dt/css/jquery.dataTables.css'

export default function Table({ dataSource }) {
  const tableRef = useRef()
  
  useEffect(() => {
    if (tableRef.current) {
      $(tableRef.current).DataTable({
        data: dataSource,
        columns: [
          { title: 'Last Name', data: 'lastName' },
          { title: 'First Name', data: 'firstName' },
          { title: 'Start Date', data: 'startDate' },
          { title: 'Department', data: 'department' },
          { title: 'Date of Birth', data: 'dateOfBirth' },
          { title: 'Street', data: 'street' },
          { title: 'City', data: 'city' },
          { title: 'State', data: 'state' },
          { title: 'Zip Code', data: 'zipCode' }
        ]
    })
    }
  }, [tableRef, dataSource])

  return (
    <div>
      <table ref={tableRef} id="employee-table" ></table>
    </div>
  )
  
}