import React from 'react';
import Link from 'next/link';

type User = { id: string; name: 'string'; email: string };
type Props = { sort: keyof User };

const UserTable = async ({ sort }: Props) => {
  const users: Array<User> = await fetch('http://localhost:3000/api/users')
    .then((resp) => resp.json() as Promise<Array<User>>)
    .then((resp) => {
      const canSort = Object.keys(resp[0]).includes(sort);
      const key = canSort ? sort : 'name';

      return resp.sort((a, b) => a[key].localeCompare(b[key]));
    });

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sort=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sort=email">email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
