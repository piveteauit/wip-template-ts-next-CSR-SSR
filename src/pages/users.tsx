import { useEffect, useState } from "react"
import Table from "../view/table"

const data = [
  { id: 1, name: "John Doe", age: 30, city: "Btz" },
  { id: 2, name: "Jane Doe", age: 25, city: "Btz" },
  { id: 3, name: "Peter Smith", age: 40, city: "Btz" },
]

const columns = [
  { id: "id", name: "ID" },
  { id: "name", name: "Name" },
  { id: "age", name: "Age" },
  { id: "city", name: "City"}
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
      <h2> {users.length} users from api / ssr</h2>
      {/*<ul>
        {users.map((u, i) => (
          <li key={i}>
            {u.id} - {u.name}
          </li>
        ))}
      </ul>*/}

      <div style={{padding: 30}}>
        <Table data={users} columns={Object.keys(users[0]).map((k) => ({id: k, name: k}))} />
      </div>
    </div>
  )
}
