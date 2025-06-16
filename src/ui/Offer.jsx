import check from "../assets/icons/Check.svg";

export default function Offer({grid ,children}) {
  return (
    <div className={`grid grid-cols-${grid ? 3 : 2} gap-5`}>
      {children}
    </div>
  );
}
