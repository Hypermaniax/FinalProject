export default function NabarSupport({ handleClick }) {
  return (
    <nav className="my-10">
      <ul className="flex gap-20 justify-center italic text-lg text-[#6C6C6C]">
        <li className="cursor-pointer" onClick={() => handleClick("aboutRent")}>
          <p>about rent</p>
        </li>
        <li className="cursor-pointer" onClick={() => handleClick("aboutUs")}>
          about us
        </li>
        <li
          className="cursor-pointer"
          onClick={() => handleClick("helpCenter")}
        >
          help center
        </li>
        <li className="cursor-pointer" onClick={() => handleClick("contactUs")}>
          contact us
        </li>
      </ul>
    </nav>
  );
}
