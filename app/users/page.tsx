import React from 'react';
import UserTable from './UserTable';

type Props = { searchParams: { sort: string } };

const UsersPage = ({ searchParams: { sort } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <UserTable sort={sort as any} />
    </>
  );
};

export default UsersPage;
