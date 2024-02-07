import React from 'react'

interface User {
    id: number;
    name: string;
}

const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' }
    // If you have data that changes frequency, disable the caching by adding the following:
    // , { cache: 'no-store' }
    // or for a certain period of time, the following rechecks every 10s
    // , { next: { revalidate: 10 } }
    );
    const users: User[] = await res.json();

  return (
    <>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
  )
}

export default UserPage