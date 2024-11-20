import MenuContent from './components/MenuContent';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { Link } from 'react-router-dom';
import { useSigninCheck } from 'reactfire';



export default function Layout({ children }) {
  const { data, status } = useSigninCheck();
  console.log(status, data)
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar backdrop-blur-md bg-base-100/30 w-full fixed z-10 border-base-content/30 border-solid border-b">
          <div className="flex-none navbar-start">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
            <div className="mx-2 flex-1 px-2">
            <Link to={`/`}>
              Portfolio
            </Link>
          </div>
          </div>
          
          <div className="navbar-end flex gap-3">
            <ThemeSwitcher />
          <div className="hidden flex-none lg:block">
              <MenuContent />
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <MenuContent side />
      </div>
    </div>
  );
}
