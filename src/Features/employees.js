import { selectEmployees } from '../Utils/selectors'
import {createSlice} from '@reduxjs/toolkit'

//data initialized with LocalStorage element
const initialState = {
  status: 'void',
  data: JSON.parse(localStorage.getItem('employees')) || [],
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
        draft.data.push(action.payload)
        return
      }
      return
    },
  },
})

//to add a new employee in the store
export async function addEmployee(store, data) {
  const status = selectEmployees(store.getState()).status
  if (status === 'pending' || status === 'updating') {
    return
  }
  store.dispatch(actions.fetching())
  store.dispatch(actions.resolved(data))
}

export default reducer