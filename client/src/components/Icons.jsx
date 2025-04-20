import icons from "../jsonFile/descWork";

export default function Icons() {
  return (
    <>
      {icons.map((item) => (
        <div className="flex items-start gap-4 p-1 ">
          <div className="bg-pink  rounded-2xl flex items-center justify-center  p-2">
            <object type="image/svg+xml" data={item.icon} width="30"></object>
          </div>
          <section>
            <h1 className="font-semibold text-lg">{item.title}</h1>
            <p className="text-sm text-gray-600 whitespace-pre-line">
              {item.description}
            </p>
          </section>
        </div>
      ))}
    </>
  );
}
