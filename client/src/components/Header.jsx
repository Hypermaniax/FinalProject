import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 py-5 shadow-lg z-50 ">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        <h1 className="font-extrabold text-2xl">
          <span className="text-black">Stay </span>
          <span className="text-pink">Nesia</span>
        </h1>
        <ul className="flex gap-8 font-medium text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/space"> Space</Link>
          </li>
          <li>
            <Link to="/bookings">Bookings</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/host">Host</Link>
          </li>
        </ul>
        <form action="">
          <button className="bg-pink text-white px-5 py-1 rounded-lg text-lg font-bold">
            Login
          </button>
        </form>
      </div>
    </header>
  );
}
