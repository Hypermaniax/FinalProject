export default function DashboardStats({ stats }) {
  return (
    <>
      {stats.map((item,index) => (
        <div key={index} className="px-4 py-8 bg-[#F5F5F5] shadow-lg rounded-2xl">
            <h5 className="font-bold mb-5 text-xl">{item.label}</h5>
            <p>{item.value}</p>
        </div>
      ))}
    </>
  );
}
