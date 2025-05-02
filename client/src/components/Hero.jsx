export default function Hero({ children }) {

  // you must remove the buttom scroll bar
  
  return (
    <div className="w-screen bg-pink text-white h-80 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
