import { useState } from "react";
import Select from "react-select";
import province from "../jsonFile/provinceAndCity.json";
import allLodgingSubtypes from "../jsonFile/types";
import facilityOptions from "../jsonFile/facilities";
import { X } from "lucide-react";

export default function NewListing() {
  const [selectedProvince, setSelectedProvince] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [image, setImage] = useState(null);
  const [selectedFacilities, setSelectedFacilities] = useState(null);

  const provinceOption = Object.keys(province).map((key) => ({
    value: key,
    label: key,
  }));

  const cityOption = selectedProvince
    ? province[selectedProvince?.value].map((city) => ({
        value: city,
        label: city,
      }))
    : [];
  console.log(selectedFacilities);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Required to allow drop
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-transparent flex items-center justify-center z-50">
      <div className="bg-white relative text-gray grid font-bold px-16 py-5   text-left rounded-2xl space-y-4 w-2/6">
        <div className="flex items-center  justify-between">
          <h1 className="text-3xl">New Listing</h1>
          <X className="relative left-12 -top-3 "/>
        </div>
        <div className="space-y-1">
          <label className="text-base">Location</label>
          <div className="flex gap-5">
            <Select
              className="w-1/2 font-normal"
              options={provinceOption}
              onChange={setSelectedProvince}
              defaultValue={selectedProvince}
              placeholder="Province"
            />

            {!!selectedProvince && (
              <Select
                className="w-1/2 font-normal"
                options={cityOption}
                onChange={setSelectedCity}
                defaultValue={selectedCity}
                placeholder="City"
              />
            )}
          </div>
        </div>
        <div className="space-y-1 grid">
          <label className="text-base">Category</label>
          <Select
            options={allLodgingSubtypes}
            className="w-1/2 font-normal"
            placeholder="Category"
          />
        </div>
        <div className="space-y-1  grid">
          <label className="text-base">Title</label>

          <input
            type="text"
            className="p-2 font-normal outline-none text-black border "
            placeholder="Add Tittle..."
          />
        </div>
        <div className="space-y-1 grid">
          <label className="text-base">Description</label>
          <textarea
            className="w-full border outline-none font-normal  p-2 rounded resize-none"
            rows={4}
            placeholder="Add Description ..."
          />
        </div>
        <div className="space-y-1">
          <label className="text-base font-semibold">Upload Image</label>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border-2 border-dashed border-gray-400 p-6 rounded-lg text-center cursor-pointer"
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="imageUpload"
            />
            <label htmlFor="imageUpload" className="cursor-pointer font-normal">
              Drag & Drop image here or{" "}
              <span className="text-pink underline">Browse</span>
            </label>
            {image && (
              <div className="mt-4">
                <img
                  src={image}
                  alt="Preview"
                  className="w-40 h-auto rounded"
                />
              </div>
            )}
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-base font-semibold">Facilities</label>
          <Select
            isMulti
            options={facilityOptions}
            onChange={setSelectedFacilities}
            defaultValue={selectedFacilities}
            placeholder="Facilities"
            className="font-normal"
          />
        </div>
        <div className="space-y-1 grid-cols-2 grid gap-5">
          <div className="grid ">
            <label className="text-base font-semibold">Capacity</label>
            <input
              type="number"
              min={0}
              max={100}
              step={1}
              className="border-2 px-3 py-2  font-normal rounded "
              placeholder="Capacity "
            />
          </div>
          <div className=" grid">
            <label className="text-base font-semibold">Price</label>
            <input
              type="number"
              min={0}
              max={100}
              step={1}
              className="border-2 px-3 py-2  font-normal rounded "
              placeholder="Capacity "
            />
          </div>
        </div>
        <div className="space-y-1 grid">
          <label className="text-base font-semibold">Price</label>
          <input
            type="number"
            min={0}
            max={100}
            step={1}
            className="border-2 px-3 py-2 w-1/2 font-normal rounded "
            placeholder="Price "
          />
        </div>
        <div className="text-center">
          <button className="bg-green-700 py-1 text-white px-4 rounded-lg">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
{
  /* <input
  type="text"
  inputmode="numeric"
  pattern="[0-9\s]{13,19}"
  autocomplete="cc-number"
  maxlength="19"
  placeholder="xxxx xxxx xxxx xxxx"
/> */
}
