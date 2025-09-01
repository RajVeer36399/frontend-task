export default function Input({ label, error, ...props }){
  return (
    <label style={{ display:'block' }}>
      <div className="small">{label}</div>
      <input
        {...props}
        style={{
          width:'100%',
          padding:'10px 12px',
          marginTop:6,
          background:'#0b1220',
          color:'#e5e7eb',
          border:'1px solid #1f2937',
          borderRadius:10,
          outline:'none'
        }}
      />
      {error ? <div className="small" style={{ color:'#ef4444' }}>{error}</div> : null}
    </label>
  )
}
