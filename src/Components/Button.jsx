export default function Button({ children, className='', variant='primary', ...props }){
  const styles = {
    primary: { bg:'#22c55e', hover:'#16a34a' },
    secondary: { bg:'#1f2937', hover:'#374151' },
    danger: { bg:'#ef4444', hover:'#dc2626' }
  }[variant] || { bg:'#1f2937', hover:'#374151' }

  return (
    <button
      className={`btn ${className}`}
      style={{
        background: styles.bg,
        color:'#0b1220',
        border:'1px solid #0b1220',
        borderRadius:12,
        padding:'10px 14px',
        fontWeight:600,
        cursor:'pointer'
      }}
      onMouseOver={(e)=> e.currentTarget.style.background = styles.hover}
      onMouseOut={(e)=> e.currentTarget.style.background = styles.bg}
      {...props}
    >
      {children}
    </button>
  )
}
