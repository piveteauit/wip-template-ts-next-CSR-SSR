import React from "react"

export default function TableBody({ data, columns }: any) {
  return (
    <tbody>
      {data.map((line, i) => (
        <tr key={`tr-data-${i}`} className={"hover:bg-gray-100"}>
          {columns.map(col =>
            col.id === "id" ? (
              <th key={`th-data-${col.id}-${i}`}>{line[col.id]}</th>
            ) : (
              <td key={`td-data-${col.id}-${i}`}>{line[col.id]}</td>
            )
          )}
        </tr>
      ))}
    </tbody>
  )
}
