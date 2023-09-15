import Link from 'next/link';
import React from 'react';

function NavBar() {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Jeffrey
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
    </div>
  );
}

export default NavBar;
