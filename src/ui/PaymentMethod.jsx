import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const classSection = (isOpen) =>
  `transition-all  duration-300 overflow-hidden transform ${
    isOpen
      ? "max-h-40 px-5 translate-y-0 opacity-100"
      : "max-h-0 -translate-y-1 opacity-0"
  }`;

export default function PaymentMethod() {
  const [openSection, setOpenSection] = useState("Virtual");
  const [selectedMethod, setSelectedMethod] = useState();

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="bg-white text-gray-500 text-sm space-y-4 shadow-lg rounded-xl p-5 ">
      <span className="font-semibold text-black text-lg">Payment Method</span>
      <p>Select one of the payment methods below to complete your order.</p>

      <div className="space-y-2">
        <div className="border-t py-2">
          <div className="flex justify-between  ">
            <button
              onClick={() => toggleSection("Virtual")}
              className="w-full text-start"
            >
              Virtual Account
            </button>
            {openSection === "Virtual" ? <ChevronUp /> : <ChevronDown />}
          </div>
          <div className={classSection(openSection === "Virtual")}>
            <label className="block my-2">
              <input
                type="radio"
                name="payment"
                value="BRI"
                checked={selectedMethod === "BRI"}
                onChange={() => setSelectedMethod("BRI")}
                className="mr-2"
              />
              Bank BRI
            </label>

            <label className="block my-2">
              <input
                type="radio"
                name="payment"
                value="BCA"
                checked={selectedMethod === "BCA"}
                onChange={() => setSelectedMethod("BCA")}
                className="mr-2"
              />
              Bank BCA
            </label>
          </div>
        </div>
        <div className="border-b py-2 border-t">
          <div className="flex justify-between ">
            <button
              onClick={() => toggleSection("Wallet")}
              className="w-full text-start"
            >
              E-Wallet
            </button>
            {openSection === "Wallet" ? <ChevronUp /> : <ChevronDown />}
          </div>
          <div className={classSection(openSection === "Wallet")}>
            <p className="text-sm text-gray-500 p-2">Coming soon</p>
          </div>
        </div>
        <div className="border-b  py-2">
          <div className="flex justify-between ">
            <button
              onClick={() => toggleSection("Qris")}
              className="w-full text-start"
            >
              Virtual Account
            </button>
            {openSection === "Qris" ? <ChevronUp /> : <ChevronDown />}
          </div>
          <div className={classSection(openSection === "Qris")}>
            <p className="text-sm text-gray-500 p-2">Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
