export default function Card({ title, actions, children }){
  return (
    <div style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:16, padding:16 }}>
      {title || actions ? (
        <div className="spread mb-3">
          {title ? <div style={{ fontWeight:700 }}>{title}</div> : <span />}
          {actions}
        </div>
      ) : null}
      {children}
    </div>
  )
}
