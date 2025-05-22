import { ChevronDown, ChevronUp, MapPin, UserRoundPlus } from "lucide-react";

export default function SelectMenu({icon,data}) {
  ChevronDown 
  ChevronUp
  
  return (
    <div className="w-full max-w-sm">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
          {icon ? <MapPin className="w-5 h-5 text-red-500" /> : <UserRoundPlus className="w-5 h-5 text-red-500"/>}
        </span>

        <select className="w-full appearance-none rounded-xl border border-gray-300 bg-white pl-10 pr-8 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink">
          <option value="">Location to go</option>
          <option value="jakarta">Jakarta</option>
          <option value="batam">Batam</option>
          <option value="bali">Bali</option>
        </select>

        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
          <ChevronDown/>
        </span>
      </div>
    </div>
  );
}
