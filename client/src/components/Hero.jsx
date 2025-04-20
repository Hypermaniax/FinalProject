export default function Hero({children}) {
    return (
      <div className="w-screen bg-pink h-80 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex items-center justify-center">
        {children}
      </div>
    );
  }
  