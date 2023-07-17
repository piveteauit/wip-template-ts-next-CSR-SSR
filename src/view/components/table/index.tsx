import React, { useState, useEffect } from "react"
import TableFooter from "./tfoot"
import TableHeader from "./thead"
import TableBody from "./tbody"

const actions = ["edit", "remove"]

const Table = ({ data, columns }) => {
  const cols = columns.reduce(
    (acc: any, cur: any) => {
      acc[actions.includes(cur.id) ? "action" : "data"].push(cur)
      return acc
    },
    { action: [], data: [] }
  )

  return (
    <div className={"overflow-x-auto hover:divide-x-8"}>
      <table className={"table table-xs"}>
        <TableHeader cols={cols} />
        <TableBody data={data} columns={columns} />
        <TableFooter />
      </table>
    </div>
  )
}

export default Table
