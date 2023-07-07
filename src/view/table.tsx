import React, { useState, useEffect } from "react"
import TableFooter from './components/table/tfoot';
import TableHeader from './components/table/thead';
import TableBody from './components/table/tbody';

const actions = ["edit", "remove"]

const TableComponent = ({ data, columns }) => {

  const cols = columns.reduce((acc, cur) => {
    acc[actions.includes(cur.id) ? "action" : "data"].push(cur);
    return acc;
  }, {action: [], data: []})

  return (
    <div className={"overflow-x-auto"}>
      <table className={"table table-xs"}>
        <TableHeader cols={cols} />
        <TableBody data={data} columns={columns} />
        <TableFooter />
      </table>
    </div>
  )
}

export default TableComponent
