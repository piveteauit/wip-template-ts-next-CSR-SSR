import Link from "../../view/link";

export default function Dashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <Link href="/admin/users" >
        Users list
      </Link>
    </div>
  )
}
