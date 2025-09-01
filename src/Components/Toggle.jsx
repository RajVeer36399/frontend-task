export default function Toggle({ checked, onChange }){
  return (
    <div
      role="switch"
      aria-checked={!!checked}
      onClick={()=> onChange && onChange(!checked)}
      style={{
        width:48, height:28, borderRadius:999, border:'1px solid #1f2937',
        position:'relative', background: checked ? '#22c55e' : '#0b1220',
        cursor:'pointer'
      }}
    >
      <div style={{
        position:'absolute', top:2, left: checked ? 22 : 2, width:24, height:24,
        borderRadius:'50%', background:'#e5e7eb', transition:'left 150ms'
      }}/>
    </div>
  )
}
