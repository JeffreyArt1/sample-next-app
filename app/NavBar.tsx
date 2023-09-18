'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function NavBar() {
  const { status, data: session } = useSession();

  return (
    // <div className="flex bg-slate-200 p-3 space-x-3">

    //   <Link href="/users" className="mr-5">
    //     Users
    //   </Link>

    //   {status === 'loading' ? <span className="loading loading-spinner loading-xs"></span> : null}
    //   {status === 'unauthenticated' ? (
    //     <>
    //       <Link href="/api/auth/signin" className="mr-5">
    //         Login
    //       </Link>
    //     </>
    //   ) : null}
    //   {status === 'authenticated' ? (
    //     <div>
    //       {session?.user?.name}{' '}
    //       <Link className="ml-3" href="/api/auth/signout">
    //         Sign out
    //       </Link>
    //     </div>
    //   ) : null}
    // </div>
    <div className="navbar bg-neutral px-16 ">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl text-neutral-content">
          NextApp
        </Link>
      </div>
      <div className="navbar-start">
        <button className="btn btn-error"> Jolines Macho</button>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full h-10 flex items-center justify-center">
              {status === 'loading' ? (
                <span className="loading loading-spinner loading-md text-neutral-content"></span>
              ) : (
                <Image src="https://picsum.photos/42/42" alt="user image" width={42} height={42} />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            <li>
              <a className="justify-between">{session?.user?.name}</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link href="/api/auth/signout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
