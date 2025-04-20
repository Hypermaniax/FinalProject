export default function Card() {
    return (
      <div className="relative h-36 rounded-xl overflow-hidden shadow-md w-full">
        <img
          src="https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          className="w-full h-full object-cover"
          alt="Monas"
        />
        <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold flex justify-between ">
          <p>Bali</p>
          <p>22.100</p>
        </div>
      </div>
    );
  }
  