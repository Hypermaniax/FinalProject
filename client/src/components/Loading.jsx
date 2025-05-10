
export default function Loading() {
  return (
    <div className=" items-center justify-center p-5 bg-white">
      <div className="flex flex-col items-center">
        {/* Main spinner with coral/red color from StayNesia */}
        <div className="relative">
          {/* Outer arc spinner */}
          <div className="w-20 h-20 rounded-full">
            <span className="absolute top-0 left-0 w-20 h-20 border-4 border-darkWhite border-t-pink border-r-pink rounded-full animate-spin"/>
          </div>
          
          {/* Inner circle */}
          <div className="absolute top-2  left-2 w-16 h-16 border-4 border-darkWhite border-t-pink border-r-pink  rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          
          {/* Center coral dot */}
          <div className="absolute top-7  bg-pink left-7 w-6 h-6 bg-red-500 rounded-full"></div>
        </div>
        
        {/* Loading text */}
        <div className="mt-6 text-gray-600 font-medium">
          Loading...
        </div>

        {/* Animated dots */}
        <div className="flex space-x-1 mt-2">
          <span className="w-2 h-2 bg-pink rounded-full animate-bounce" style={{ animationDelay: '0ms' }}/>
          <span className="w-2 h-2 bg-pink rounded-full animate-bounce" style={{ animationDelay: '300ms' }}/>
          <span className="w-2 h-2 bg-pink rounded-full animate-bounce" style={{ animationDelay: '600ms' }}/>
        </div>
      </div>
    </div>
  );
}
