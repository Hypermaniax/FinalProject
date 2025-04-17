import searchImg from "../assets/search.svg";
export default function Section({ link, content, search }) {
  return (
    <section className="col-span-1 content-center">
      {link ? (
        <img src={link} />
      ) : (
        <>
          <h1 className="whitespace-pre-line font-bold italic text-5xl">
            {content.head}
          </h1>
          <p className="text-gray-600 mt-6 leading-relaxed whitespace-pre-line font-thin">
            {content.text}
          </p>
          {search ? (
            <form className="mt-20 bg-white w-3/4 align shadow-lg flex rounded-2x justify-evenly p-5 rounded-full">
              <div>
                <label htmlFor="location">Location</label>
                {/* <input type="text" /> */}
              </div>
              <div>
                <label htmlFor="location">Guest</label>
                {/* <input type="text" /> */}
              </div>
              <div>
                <label htmlFor="location">Category</label>
                {/* <input type="text" /> */}
              </div>
              <button className="rounded-full p-2 bg-pink justify-items-end">
                <img src={searchImg} className="h-5" />
              </button>
            </form>
          ) : (
            <section className="mt-8" >
              <ul className="flex gap-16 font-bold justify-center">
                <li>
                  <button className="bg-white px-7 py-3 rounded-full shadow-lg">About Rent</button>
                </li>
                <li>
                  <button className="bg-pink px-7 py-3 rounded-full shadow-lg text-white" >About Host</button>
                </li>
              </ul>
            </section>
          )}
        </>
      )}
    </section>
  );
}
