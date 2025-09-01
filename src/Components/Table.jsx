export default function Table({ columns, data, rowKey }){
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.key || col.dataIndex}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={row[rowKey] ?? idx}>
            {columns.map(col => (
              <td key={col.key || col.dataIndex}>
                {col.render ? col.render(row[col.dataIndex], row) : row[col.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
