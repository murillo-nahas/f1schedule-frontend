import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export function Header() {
  return (
    <nav className="flex flex-row justify-between items-center p-8">
      <div className="flex flex-row justify-center items-center">
        <img src={Logo} alt="logo" />
        <ul className="flex flex-row list-none">
          <div className="group">
            <li className="ml-12 flex flex-row justify-center items-center">
              <Link
                to="/schedules"
                className="text-black group-hover:text-red-600 transition-colors"
              >
                Schedules
              </Link>
              <IoIosArrowDown className="group-hover:text-red-600 ml-1" />
            </li>
          </div>

          <div className="group">
            <li className="ml-12 flex flex-row justify-center items-center">
              <Link
                to="/schedules"
                className="text-black group-hover:text-red-600 transition-colors"
              >
                Standings
              </Link>
              <IoIosArrowDown className="group-hover:text-red-600 ml-1" />
            </li>
          </div>

          <div className="group">
            <li className="ml-12 flex flex-row justify-center items-center">
              <Link
                to="/schedules"
                className="text-black group-hover:text-red-600 transition-colors"
              >
                Drivers
              </Link>
              <IoIosArrowDown className="group-hover:text-red-600 ml-1" />
            </li>
          </div>

          <div className="group">
            <li className="ml-12 flex flex-row justify-center items-center">
              <Link
                to="/schedules"
                className="text-black group-hover:text-red-600 transition-colors"
              >
                Teams
              </Link>
              <IoIosArrowDown className="group-hover:text-red-600 ml-1" />
            </li>
          </div>
        </ul>
      </div>

      <div className="flex flex-row justify-center items-center">
        <IoIosSearch className="w-6 h-6 mr-12 cursor-pointer" />
        <button className="relative bg-red-600 text-sm text-white rounded-xl w-32 h-10 overflow-hidden">
          <Link
            to="/"
            className="absolute inset-0 flex items-center justify-center w-full h-full bg-red-600 hover:bg-red-700"
          >
            Try it free
          </Link>
        </button>
      </div>
    </nav>
  );
}
