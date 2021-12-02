import employeesReducer from '../Features/employees'
import {configureStore} from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    employees: employeesReducer,
  },
})
