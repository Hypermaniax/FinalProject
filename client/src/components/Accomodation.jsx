import Card from "./Card";

export default function Accomodation({ heading, title }) {
  return (
    <section className="text-center mt-24">
      <h4 className="text-pink text-sm font-bold">{heading}</h4>
      <h1 className="text-2xl mb-10 font-bold">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
