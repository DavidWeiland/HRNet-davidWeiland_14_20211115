import { selectEmployees } from '../Utils/selectors'
import {createSlice} from '@reduxjs/toolkit'

//data initialized with LocalStorage - waiting for backend
const initialState = {
  status: 'void',
  data: null,
  error: null,
}

//actions and reducers genereted by #reduxjs/toolkit
const { actions, reducer } = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    fetching: (draft, action) => {
      if (draft.status === 'void') {
        draft.status = 'pending'
        return
      }
      if (draft.status === 'rejected') {
        draft.error = null
        draft.status = 'pending'
        return
      }
      if (draft.status === 'resolved' || draft.status === 'added') {
        draft.status = 'updating'
        return
      }
      return
    },
    resolved: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.status = 'resolved'
        draft.data = action.payload
        return
      }
      return
    },
    rejected: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.status = 'rejected'
        draft.data = null
        return
      }
      return
    },
  },
})

//to get employeesList
export async function getEmployees(store) {
  const status = selectEmployees(store.getState()).status
  if (status === 'pending' || status === 'updating') {
    return
  }
  store.dispatch(actions.fetching())
  try {
    const data = await JSON.parse(localStorage.getItem('employees')) || []
    store.dispatch(actions.resolved(data))
  }
  catch (error){
    store.dispatch(actions.rejected(error))
  }
}

//to add a new employee in the store
export async function addEmployee(store, employee) {
  const status = selectEmployees(store.getState()).status
  if (status === 'pending' || status === 'updating') {
    return
  }
  store.dispatch(actions.fetching())
  try {
    const employees = await JSON.parse(localStorage.getItem('employees')) || []
    employees.push(employee)
    localStorage.setItem('employees', JSON.stringify(employees))
    store.dispatch(actions.resolved(employees))
  }
  catch (error) {
    store.dispatch(actions.rejected(error))
  }
}

export default reducer