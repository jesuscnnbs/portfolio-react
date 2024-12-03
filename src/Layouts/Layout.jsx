import ThemeSwitcher from '../components/ThemeSwitcher';
import { Link } from 'react-router-dom';



export default function Layout({ children }) {
  return (
    <div className="max-w-3xl mx-auto">
        {/* Navbar */}
        <div className="fixed z-10 justify-center mx-auto left-[50%] -translate-x-1/2 top-10 rounded-3xl w-80 navbar glass-box">
          <div className="navbar-center">
            <div className="flex-1 px-2 mx-2">
            <Link to={`/`}>
              DesertCoder
            </Link>
          </div>
            <ThemeSwitcher />
          </div>
        </div>
        {children}
    </div>
  );
}
