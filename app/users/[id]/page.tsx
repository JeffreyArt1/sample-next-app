import React from 'react';

type Props = {
  params: { id: number };
};

function UserDetailPage({ params: { id } }: Props) {
  return <div>User ID: {id}</div>;
}

export default UserDetailPage;
