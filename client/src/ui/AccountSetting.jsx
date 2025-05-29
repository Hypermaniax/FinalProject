import Input from "./Input";

export default function AccountSetting() {
  return (
    <>
      <h1 className="font-bold  text-2xl">Account Setting</h1>

      <div className="p-5 grid text-gray-400 bg-white mt-10 rounded-2xl">
        <h1 className="text-xl border-b-2 ">Personal Details</h1>

        <div className="mt-10 grid-cols-2 gap-5 grid">
          <div className="col-span-1">
            <div className="grid">
              <label htmlFor="">Username</label>
              <input
                type="text"
                className="border outline-none h-10 rounded-lg px-1"
              />
            </div>
            <div className="grid">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                className="border outline-none h-10 rounded-lg px-1"
              />
            </div>
            <div className="grid">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="border outline-none h-10 rounded-lg px-1"
              />
            </div>
          </div>
          <div className="col-span-1 w-full place-items-center  grid text-rigt ">
            <img
              src=""
              alt="sd333asssssssssssss"
              className="rounded-full  border h-60 w-60"
            />
            <div className="flex mt-5 gap-10">
              <button className="border-pink border px-5 rounded-md text-black">
                Reset
              </button>
              <button className="bg-pink px-5 text-white rounded-md">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl text-gray-400 p-5 mt-20">
        <h1 className="text-xl border-b-2">Security</h1>
        <div className="grid">
          <div className="flex justify-between">
            <div className="mt-5">
              <h1 className="text-black font-semibold">Forgot Password</h1>
              <p>Forgot your Password ? you can change it on Here</p>
            </div>
            <button className="text-pink">Change</button>
          </div>
          <div className="flex justify-between">
            <div className="mt-5">
              <h1 className="text-black font-semibold">Delete Account</h1>
              <p>
                Once your account is deleted, you will not be able to restore
                your account or data.
              </p>
            </div>
            <button className="text-pink">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
