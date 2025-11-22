import { useEffect, useMemo, useState } from 'react'
import Card from '../Components/Card'
import Table from '../Components/Table'
import Toggle from '../Components/Toggle'
import Button from '../Components/Button'
import { apiGetStudents, apiSubmitAttendance } from '../Services/Api'

function formatDateInput(date){
  const d = new Date(date)
  const y = d.getFullYear()
  const m = String(d.getMonth()+1).padStart(2,'0')
  const day = String(d.getDate()).padStart(2,'0')
  return `${y}-${m}-${day}`
}

export default function StudentList(){
  const [students, setStudents] = useState([])
  const [date, setDate] = useState(formatDateInput(new Date()))
  const [marks, setMarks] = useState({}) // studentId -> true/false
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(()=>{
    (async ()=>{
      const list = await apiGetStudents()
      setStudents(list)
      const defaults = {}
      list.forEach(s => { defaults[s.id] = true })
      setMarks(defaults)
    })()
  }, [])

  const columns = useMemo(()=>[
    { title: 'Roll No', dataIndex:'roll' },
    { title: 'Student', dataIndex:'name' },
    { title: 'Status', dataIndex:'id', render: (_, row) => (
        <div className="flex">
          <Toggle checked={!!marks[row.id]} onChange={(val)=> setMarks(x => ({ ...x, [row.id]: val }))} />
          <span className="badge">{marks[row.id] ? 'Present' : 'Absent'}</span>
        </div>
      )
    },
  ], [marks])

  const onSave = async () => {
    setSaving(true)
    try{
      const dateISO = new Date(date + 'T00:00:00').toISOString().slice(0,10)
      const records = students.map(s => ({ studentId: s.id, present: !!marks[s.id] }))
      await apiSubmitAttendance({ dateISO, records })
      setSaved(true)
      setTimeout(()=> setSaved(false), 2000)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="container">
      <Card
        title="Mark Attendance"
        actions={
          <div className="flex">
            <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} />
            <Button onClick={onSave} disabled={saving}>{saving ? 'Saving...' : 'Save'}</Button>
            {saved ? <span className="badge">Saved ✓</span> : null}
          </div>
        }
      >
        <Table
          columns={[
            { title: 'Roll No', dataIndex:'roll' },
            { title: 'Student', dataIndex:'name' },
            { title: 'Status', dataIndex:'id', render: (_, row) => (
              <div className="flex">
                <Toggle checked={!!marks[row.id]} onChange={(val)=> setMarks(x => ({ ...x, [row.id]: val }))} />
                <span className="badge">{marks[row.id] ? 'Present' : 'Absent'}</span>
              </div>
            ) },
          ]}
          data={students}
          rowKey="id"
        />
      </Card>
    </div>
  )
}

