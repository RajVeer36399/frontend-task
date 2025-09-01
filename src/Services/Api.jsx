import axios from 'axios'
import * as mock from './Mock'

const useMock = (import.meta.env.VITE_USE_MOCK ?? 'true') === 'true'
const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

const client = axios.create({ baseURL })

export async function apiGetStudents(){
  if(useMock) return mock.getStudents()
  const { data } = await client.get('/api/students')
  return data
}

export async function apiSubmitAttendance({ dateISO, records }){
  if(useMock) return mock.submitAttendance({ dateISO, records })
  const { data } = await client.post('/api/attendance', { dateISO, records })
  return data
}

export async function apiGetSummary(){
  if(useMock) return mock.getSummary()
  const { data } = await client.get('/api/attendance/summary')
  return data
}
