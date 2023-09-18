import React from 'react';
import UserTable from './UserTable';
import AddUser from './AddUser';

type Props = { searchParams: { sort: string } };

const UsersPage = ({ searchParams: { sort } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <AddUser />
      <UserTable sort={sort as any} />
    </>
  );
};

export default UsersPage;
