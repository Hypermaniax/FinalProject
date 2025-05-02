import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input(
  { typeInput, label, id, grid, text },
  ref
) {
  const data = useRef();

  useImperativeHandle(ref, () => {
    return {
      value() {
        return data.current.value;
      },
    };
  });

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
          ref={data}
          className="border border-gray-300 focus:border-gray-400 outline-none rounded-md w-full px-3 py-2 text-sm"
        />
      )}
    </div>
  );
});

export default Input;
