import { useState } from "react";
import province from "../jsonFile/provinceAndCity.json";

export default function NewListing() {
  const [isOpen, setIsOpen] = useState();
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-transparent flex items-center justify-center z-50">
      <div className="bg-white relative text-gray grid font-bold px-16 py-10 mt-5  text-left rounded-2xl space-y-5 w-2/6">
        <h1 className="text-3xl">New Listing</h1>
        <div className="space-y-2">
          <label className="text-base">Location</label>
          <div className="flex gap-5">
            <select
              onChange={(e) => setIsOpen(e.target.value)}
              className="bg-white font-normal overflow-y-auto w-1/2 border-2 p-2 outline-none"
            >
              <option disabled selected hidden>
                Province
              </option>
              {Object.keys(province).map((key) => (
                <option value={key}>{key}</option>
              ))}
            </select>
            {isOpen && (
              <select
                name=""
                id=""
                className="bg-white font-normal overflow-y-auto w-1/2 border-2 p-2 outline-none"
              >
                <option disabled selected hidden>
                  City
                </option>
                {province[isOpen].map((city) => (
                  <option value={city}>{city}</option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
