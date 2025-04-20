export default function Input({ typeInput, label, id, grid ,text}) {
  return (
    <div className={grid}>
      <label
        htmlFor={id}
        className="text-sm  text-gray-600 mb-1 block font-sans font-thin"
      >
        {label}
      </label>
      {text ? (
        <p>Monday, 17 oktober 2045</p>
      ) : (
        <input
          type={typeInput}
          id={id}
          name={id}
          className="border border-gray-300 focus:border-gray-400 outline-none rounded-md w-full px-3 py-2 text-sm"
        />
      )}
    </div>
  );
}
