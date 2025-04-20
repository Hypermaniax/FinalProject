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
            <div className="flex justify-center mt-6">
              <button className="rounded-full font-bold px-8 py-2 shadow-lg bg-pink text-white">
                Book Now
              </button>
            </div>
          ) : (
            <section className="mt-8">
              <ul className="flex gap-16 font-bold justify-center">
                <li>
                  <button className="bg-white px-7 py-3 rounded-full shadow-lg">
                    About Rent
                  </button>
                </li>
                <li>
                  <button className="bg-pink px-7 py-3 rounded-full shadow-lg text-white">
                    About Host
                  </button>
                </li>
              </ul>
            </section>
          )}
        </>
      )}
    </section>
  );
}
