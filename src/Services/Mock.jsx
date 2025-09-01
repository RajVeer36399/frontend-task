/**
 * MOCK API using localStorage.
 * Simulates the following routes:
 *  - GET /api/students
 *  - POST /api/attendance
 *  - GET /api/attendance/summary  (derived from saved records)
 */

const STUDENTS_KEY = 'mock_students'
const ATTENDANCE_KEY = 'mock_attendance' // array of { dateISO, records: [{studentId, present}] }

function seed() {
  if(!localStorage.getItem(STUDENTS_KEY)){
    const students = Array.from({ length: 18 }).map((_,i)=> ({
      id: 'S' + String(i+1).padStart(2,'0'),
      name: ['Rahul','Priya','Aarav','Isha','Vihaan','Ananya','Advait','Sara','Arjun','Meera','Karthik','Diya','Rohan','Sneha','Kabir','Riya','Aisha','Dev'][i],
      roll: i+1
    }))
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(students))
  }
  if(!localStorage.getItem(ATTENDANCE_KEY)){
    localStorage.setItem(ATTENDANCE_KEY, JSON.stringify([]))
  }
}
seed()

export async function getStudents(){
  const students = JSON.parse(localStorage.getItem(STUDENTS_KEY) || '[]')
  return students.sort((a,b)=> a.roll - b.roll)
}

export async function submitAttendance(payload){
  // payload: { dateISO, records: [{ studentId, present }] }
  const list = JSON.parse(localStorage.getItem(ATTENDANCE_KEY) || '[]')
  // Upsert for date
  const idx = list.findIndex(x => x.dateISO === payload.dateISO)
  if(idx >= 0) list[idx] = payload
  else list.push(payload)
  localStorage.setItem(ATTENDANCE_KEY, JSON.stringify(list))
  return { ok:true }
}

export async function getSummary(){
  const students = JSON.parse(localStorage.getItem(STUDENTS_KEY) || '[]')
  const all = JSON.parse(localStorage.getItem(ATTENDANCE_KEY) || '[]')
  // compute percentage present per student
  const totals = {}
  const days = all.length || 1
  students.forEach(s => totals[s.id] = 0)
  all.forEach(day => {
    day.records.forEach(r => { totals[r.studentId] = (totals[r.studentId] || 0) + (r.present ? 1 : 0) })
  })
  const classPct = Math.round( (Object.values(totals).reduce((a,b)=>a+b,0) / (days * students.length)) * 100 )
  const perStudent = students.map(s => ({
    name: s.name,
    percentage: Math.round((totals[s.id] / days) * 100)
  }))
  return { classPct, perStudent }
}
