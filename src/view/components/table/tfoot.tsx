import React from "react"

export default function TableFooter() {
  return (
    <tfoot>
      <tr>
        <th colSpan={4}>1 - 10 of 100</th>

        <td colSpan={4} className={"text-right"}>
          <div className="join">
            <button className="join-item btn btn-xs">«</button>
            <button className="join-item btn btn-xs">Page 22</button>
            <button className="join-item btn btn-xs">»</button>
          </div>
        </td>
      </tr>
    </tfoot>
  )
}
