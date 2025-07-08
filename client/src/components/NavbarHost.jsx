import logoSn1 from "../assets/logosn1.png";

export default function NavbarHost() {
  return (
    <>
      <nav className="bg-white flex sticky top-0 shadow-lg z-50">
        <div className="max-w-7xl w-full mx-auto ">
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-2 ">
              <img src={logoSn1} alt="" className="h-7" />
              <h1 className="font-extrabold text-2xl">
                <span className="text-black">Stay</span>
                <span className="text-pink">Nesia</span>
              </h1>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
