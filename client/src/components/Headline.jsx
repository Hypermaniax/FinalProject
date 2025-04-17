import Section from "./Section";
import img1 from "../assets/Photo.png";
import img from "../assets/Photo1.png";

const firsText = {
  head: `Book the Best Space for 
        Any Event or Activity`,
  text: `No matter the type of gathering, whether it's for a business meeting, personal 
              celebration, creative workshop, team-building session, or a casual get-together, 
              we have the ideal space to suit your needs. 

              From corporate events to intimate gatherings, we provide versatile spaces 
              designed for every occasion, making your experience seamless and memorable.`,
};

const secondText = {
  head: `Everything You Need 
        to Rent or Host a Space`,
  text: `We help renters and space owners connect through a simple and reliable platform.

                    If you're looking for a place whether for meetings, events, content creation, 
                    or personal use you can easily search, compare, and book from a variety of 
                    available spaces.

                    If you're a host, you can list your space, manage your schedule, set your own 
                    pricing, and earn income from your unused areas.

                    Everything happens in one place from discovery to payment making the rental 
                    process smooth, transparent, and flexible for everyone.`,
};

export default function Headline() {
    
  return (
    <div className="grid grid-cols-2 pt-16 gap-10">
      <Section search content ={firsText}/>
      <Section link={img1} />
      <Section link={img} />
      <Section content={secondText}/>
    </div>
  );
}
