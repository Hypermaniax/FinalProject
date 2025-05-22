export default function Hero({ children }) {

  // you must remove the buttom scroll bar
  
  return (
    <div className="w-full bg-pink text-white h-80  flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
