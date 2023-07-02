import { useEffect, useState } from "react"
import Table from "../view/table"

export async function getServerSideProps({ req, res }: any) {
  return {
    props: {
      users: res.pageParams?.users || [],
    },
  }
}


export default function Users(props: any) {
  const [users, setUsers] = useState(props.users)

  useEffect(() => {
    if (!users?.length) fetch("/api/users")
      .then(r => r.json())
      .then(setUsers)
  }, [users])

  return (
    <div>
      <h2> {users?.length} users from api / ssr</h2>
      {/*<ul>
        {users.map((u, i) => (
          <li key={i}>
            {u.id} - {u.name}
          </li>
        ))}
      </ul>*/}

      <div style={{ padding: 30 }}>
        <Table
          data={users}
          columns={Object.keys({...(users[0] || {}), edit: {id: "edit", name: "edit"}, remove: {id: "remove", name: "remove"} }).map(k => ({ id: k, name: k }))}
        />
      </div>
    </div>
  )
}
