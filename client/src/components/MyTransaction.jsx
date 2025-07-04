import UseGetGuestPayment from "../hooks/payment/UseGetGuestPayment";

export default function MyTransaction() {
  const {payment,handleSelectStatus} = UseGetGuestPayment()
  console.log(payment)
  return (
    <>
      <h1 className="font-bold text-2xl ">My Trasaction</h1>
      <div className="flex shadow-xl mt-10 p-1 justify-evenly rounded-xl  bg-white ">
        <button
          onClick={() => handleSelectStatus("pending")}
          className=" hover:cursor-pointer"
        >
          Pending
        </button>
        <button
          onClick={() => handleSelectStatus("confirmed")}
          className=" hover:cursor-pointer"
        >
          In Progress
        </button>
        <button
          onClick={() => handleSelectStatus("success")}
          className=" hover:cursor-pointer"
        >
          Completed
        </button>
      </div>
      <div className="max-h-[800px] grid gap-5 pt-5 mt-10 pr-5 overflow-y-scroll">
        <div className="w-3/4 flex justify-between rounded-xl shadow-lg m-5  bg-white p-5">
          <div>
              <p>booking Id 3123123123</p>
              <h1 className="text-2xl font-semibold">Rumah Om Surya</h1>
              <p>paid at-15</p>
          </div>
          <div className=" content-center">
            <p>Rp.122222</p>
          </div>
        </div>
      </div>
    </>
  );
}
