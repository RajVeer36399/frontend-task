import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { apiGetSummary } from '../services/api'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

export default function Summary(){
  const [data, setData] = useState({ classPct: 0, perStudent: [] })

  useEffect(()=>{
    (async ()=>{
      const res = await apiGetSummary()
      setData(res)
    })()
  }, [])

  return (
    <div className="container grid">
      <Card title="Class Summary">
        <div className="spread">
          <div>
            <div className="small">Avg Attendance</div>
            <div style={{ fontSize:32, fontWeight:800 }}>{data.classPct}%</div>
          </div>
          <div className="badge">Dynamic · Recharts</div>
        </div>
      </Card>

      <Card title="Attendance by Student">
        <div style={{ width:'100%', height:420 }}>
          <ResponsiveContainer>
            <BarChart data={data.perStudent}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={0} angle={-25} textAnchor="end" height={80} />
              <YAxis unit="%" />
              <Tooltip />
              <Bar dataKey="percentage" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}
