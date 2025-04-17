export default function Header() {
  return (
    <header className="bg-white sticky top-0 py-5 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        <h1 className="font-extrabold text-2xl">
          <span className="text-black">Rent </span>
          <span className="text-pink">Hub</span>
        </h1>
        <ul className="flex gap-8 font-medium text-lg">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Browse Space</a>
          </li>
          <li>
            <a href="">Bookings</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Become Host</a>
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
