import * as React from 'react';
import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useSigninCheck } from 'reactfire';

export default function MenuContent({ side }) {
  const { data, status } = useSigninCheck();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      throw new Error(error)
    }
  };
  return (
    <ul className={classNames("menu ", { "menu-horizontal": !side }, { "bg-base-200 min-h-full max-w-[90%] w-80 p-4": side })}>
      {/* Navbar menu content here */}
      {data && data.signedIn ? (
        <React.Fragment>
          <li><Link to={`/dashboard`}>Dashboard</Link></li>
          <li onClick={handleLogout}>
            
            <a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>Logout</a>
          </li>
        </React.Fragment>
      ) : (
        <li>
          <Link to={`/login`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Login
          </Link>
        </li>
      )}
    </ul>
  )
}
