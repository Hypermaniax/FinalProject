import { useState, useMemo } from "react";
import Select from "react-select";
import province from "../jsonFile/provinceAndCity.json";
import allLodgingSubtypes from "../jsonFile/types";
import facilityOptions from "../jsonFile/facilities";
import { X } from "lucide-react";
import UseAddListing from "../hooks/UseAddListing";
import rulesTime from "../jsonFile/time.json";
import { components } from "react-select";
import Loading from "./Loading";

const CustomOption = (props) => {
  const {
    data: { label, icon: Icon },
  } = props;

  return (
    <components.Option {...props}>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-muted-foreground" />}
        <span>{label}</span>
      </div>
    </components.Option>
  );
};

const CustomMultiValueLabel = (props) => {
  const {
    data: { label, icon: Icon },
  } = props;

  return (
    <components.MultiValueLabel {...props}>
      <div className="flex items-center gap-1">
        {Icon && <Icon className="w-3 h-3 text-muted-foreground" />}
        <span>{label}</span>
      </div>
    </components.MultiValueLabel>
  );
};

export default function NewListing({ handleClose }) {
  const [form, setForm] = useState({
    address: null,
    city: null,
    province: null,
    category: null,
    title: null,
    description: null,
    checkIn: null,
    checkOut: null,
    nightTime: [],
    additional: null,
    imgUrl: [],
    facility: [],
    capacity: null,
    price: null,
  });

  const { setAddListing, loading } = UseAddListing(handleClose);

  const provinceOption = Object.keys(province).map((key) => ({
    value: key,
    label: key,
  }));

  const cityOption = useMemo(() => {
    if (!form.province) return [];

    return province[form.province].map((city) => ({
      value: city,
      label: city,
    }));
  }, [form.province]);

  const confirm = () => {
    setAddListing(form);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setForm((prev) => ({
        ...prev,
        imgUrl: [...prev.imgUrl, file],
      }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Required to allow drop
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file && file.type.startsWith("image/")) {
      setForm((prev) => ({
        ...prev,
        imgUrl: [...prev.imgUrl, file],
      }));
    }
  };
  const handleChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    setForm((prev) => ({ ...prev, price: parseInt(raw) }));
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="bg-darkWhite relative text-gray grid font-bold px-16 py-5   text-left rounded-2xl space-y-4 w-2/6">
          {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50 rounded-2xl">
              <Loading />
            </div>
          )}
          <div className="flex items-center  justify-between">
            <h1 className="text-3xl">New Listing</h1>
            <X onClick={handleClose} className="relative left-12 -top-3 " />
          </div>
          <div className="space-y-5">
            <label className="text-base">Location</label>
            <div className="flex gap-5">
              <Select
                className="w-1/2 font-normal"
                options={provinceOption}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    province: e.value,
                    city: null,
                  }))
                }
                defaultValue={form.province}
                placeholder="Province"
              />

              {!!form?.province && (
                <Select
                  className="w-1/2 font-normal"
                  options={cityOption}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      city: e.value,
                    }))
                  }
                  defaultValue={form.city}
                  placeholder="City"
                />
              )}
            </div>
            <div className="space-y-1 grid">
              <textarea
                className="w-full border outline-none font-normal  p-2 rounded resize-none"
                rows={8}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
                placeholder="Add Addres ..."
              />
            </div>
          </div>
          <div className="space-y-1 grid">
            <label className="text-base">Category</label>
            <Select
              options={allLodgingSubtypes}
              className="w-1/2 font-normal"
              placeholder="Category"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, category: e.value }))
              }
            />
          </div>
          <div className="space-y-1  grid">
            <label className="text-base">Title</label>
            <input
              type="text"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              className="p-2 font-normal outline-none text-black border "
              placeholder="Add Tittle..."
            />
          </div>
          <div className="space-y-1 grid">
            <label className="text-base">Description</label>
            <textarea
              className="w-full border outline-none font-normal  p-2 rounded resize-none"
              rows={8}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
              placeholder="Add Description ..."
            />
          </div>
          <div className="space-y-1  grid">
            <label className="text-base">Rules</label>
            <div className="grid gap-4 grid-cols-2">
              <label className="ml-4">Check In & Check Out</label>
              <div className="col-span-2 ml-4 grid-cols-2 gap-4 grid">
                <Select
                  options={rulesTime}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      checkIn: e.value,
                    }))
                  }
                  defaultValue={form.checkIn}
                  placeholder="Check In"
                  className="font-normal"
                  components={{
                    Option: CustomOption,
                    MultiValueLabel: CustomMultiValueLabel,
                  }}
                />
                <Select
                  options={rulesTime}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      checkOut: e.value,
                    }))
                  }
                  defaultValue={form.checkOut}
                  placeholder="Check Out"
                  className="font-normal"
                  components={{
                    Option: CustomOption,
                    MultiValueLabel: CustomMultiValueLabel,
                  }}
                />
              </div>
              <label className="ml-4">Night Time</label>
              <div className="col-span-2 ml-4 grid-cols-2 gap-4 grid">
                <Select
                  options={rulesTime}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,

                      nightTime: [e.value],
                    }))
                  }
                  placeholder="Start night Time"
                  className="font-normal "
                  components={{
                    Option: CustomOption,
                    MultiValueLabel: CustomMultiValueLabel,
                  }}
                />
                {form.nightTime.length > 0 && (
                  <Select
                    options={rulesTime}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        nightTime: [...prev.nightTime, e.value],
                      }))
                    }
                    placeholder="End night Time"
                    className="font-normal "
                    components={{
                      Option: CustomOption,
                      MultiValueLabel: CustomMultiValueLabel,
                    }}
                  />
                )}
                <textarea
                  type="text"
                  rows={8}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      additional: e.target.value,
                    }))
                  }
                  placeholder="Additional"
                  className="p-2 font-normal outline-none col-span-2 text-black border"
                />
              </div>
            </div>
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
              <label
                htmlFor="imageUpload"
                className="cursor-pointer font-normal"
              >
                Drag & Drop image here or{" "}
                <span className="text-pink underline">Browse</span>
              </label>
              {form.imgUrl.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {form.imgUrl.map((src, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(src)}
                      alt={`Preview ${index}`}
                      className="w-24 h-24 object-cover rounded"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-base font-semibold">Facilities</label>
            <Select
              isMulti
              options={facilityOptions}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  facility: e.map((item) => item.value),
                }))
              }
              placeholder="Facilities"
              className="font-normal"
              components={{
                Option: CustomOption,
                MultiValueLabel: CustomMultiValueLabel,
              }}
            />
          </div>
          <div className="space-y-1 grid-cols-2 grid gap-5">
            <div className="grid ">
              <label className="text-base font-semibold">Capacity</label>
              <input
                type="number"
                min={0}
                max={100}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    capacity: parseInt(e.target.value),
                  }))
                }
                step={1}
                className="border-2 px-3 py-2  font-normal rounded "
                placeholder="Capacity "
              />
            </div>
            <div className=" grid">
              <label className="text-base font-semibold">Price</label>
              <input
                type="text"
                min={0}
                value={
                  form.price
                    ? new Intl.NumberFormat("id-ID").format(form.price)
                    : ""
                }
                onChange={handleChange}
                className="border-2 px-3 py-2 font-normal rounded w-full"
                placeholder="0"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={confirm}
              className="bg-green-700 py-1 text-white px-4 rounded-lg"
              disabled={loading} // optional: disable to prevent double submit
            >
              {loading ? "Uploading..." : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
