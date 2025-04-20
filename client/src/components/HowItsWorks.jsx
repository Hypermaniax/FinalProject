import Icons from "./Icons";
import rectangle01 from '../assets/Rectangle01.png'
export default function HowItsWorks() {
  
  return (
    <div className="bg-white rounded-3xl p-10 ">
      <header className="text-center mb-5">
        <h3 className="text-pink font-extrabold text-lg">HOW IT WORKS</h3>
        <h1 className="text-3xl font-extrabold">
          GET YOUR BEST SPACES TO BOOK
        </h1>
      </header>
      <section className="grid grid-cols-2">
        <section className="col-span-1">
          <Icons />
        </section>
        <section className="col-span-1 justify-center">
          <img src={rectangle01} alt="" className="rounded-full" />
        </section>
      </section>
    </div>
  );
}
