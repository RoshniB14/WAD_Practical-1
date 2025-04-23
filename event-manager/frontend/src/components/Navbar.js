import '../styles/Navbar.css';

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md p-4 rounded-b-xl">
      <ul className="flex justify-center space-x-8 text-white text-lg font-semibold tracking-wide">
        <li className="hover:text-yellow-300 transition"><Link to="/">Home</Link></li>
        <li className="hover:text-yellow-300 transition"><Link to="/events">Events</Link></li>
        <li className="hover:text-yellow-300 transition"><Link to="/create">Create</Link></li>
        <li className="hover:text-yellow-300 transition"><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
