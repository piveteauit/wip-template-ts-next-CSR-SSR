import { useEffect, useState } from "react"
import Table from "../view/table"

const data = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Doe", age: 25 },
  { id: 3, name: "Peter Smith", age: 40 },
]

const columns = [
  { id: "id", name: "ID" },
  { id: "name", name: "Name" },
  { id: "age", name: "Age" },
]

export default function Users(props: any) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/users")
      .then(r => r.json())
      .then(setUsers)
  }, [])

  return (
    <div>
      <ul>
        {users.map((u, i) => (
          <li key={i}>
            {u.id} - {u.name}
          </li>
        ))}
      </ul>

      <Table data={data} columns={columns} />
    </div>
  )
}
