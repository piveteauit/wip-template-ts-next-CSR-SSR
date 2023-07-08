import React from "react"

export default function TableHeader({ cols }: any) {
  return (
    <thead>
      <tr>
        {cols.data.map(col => (
          <th key={`th-data-${col.id}`}>{col.id !== "id" ? col.name : ""}</th>
        ))}
        {cols.action.length && (
          <th colSpan={cols.action.length} className={`text-center`}>
            Actions
          </th>
        )}
      </tr>
    </thead>
  )
}
