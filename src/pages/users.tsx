import e from "express";
import { useEffect, useState } from "react";

export default function Users (props: any) {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch("/api/users")
            .then(r => r.json())
            .then(setUsers)
    }, [])

    return (
        <ul>
            { users.map((u, i) => 
                <li key={i}>
                    {u.id} - {u.name}
                </li>
            ) }
        </ul>
    )

}