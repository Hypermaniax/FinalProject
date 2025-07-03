import data from "../jsonFile/offer";
import Icons from "./Icons";
import Offer from "./Offer";
import check from '../assets/icons/Check.svg'
export default function CardSupport({ title, heading, icon }) {
  return (
    <>
      <header className="text-center mb-5 mt-10">
        <h3 className="text-pink font-extrabold text-lg">{heading}</h3>
        <h1 className="text-3xl font-extrabold">{title}</h1>
      </header>
      <div className="bg-white rounded-3xl p-10 mx-auto w-4/5">
        {icon ? (
          <Icons />
        ) : (
          <Offer>
            {data.map((item,index) => (
              <div className="flex gap-2 items-center" key={index}>
                <object type="image/svg+xml" data={check} width="35"></object>
                {item.text}
              </div>
            ))}
          </Offer>
        )}
      </div>
    </>
  );
}
