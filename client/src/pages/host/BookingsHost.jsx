import DashboardStats from "../../components/DashboardStats";
import RecentBookings from "../../components/RecentBookings";
import { CircleUserRound } from "lucide-react";

const stats = [
  {
    label: "Total Revenue",
    value: "$5,230 this month",
  },
  {
    label: "Active Listings",
    value: "8 properties",
  },
  {
    label: "New Messages",
    value: "3 unread",
  },
  {
    label: "Average Rating",
    value: "4.8 / 5.0",
  },
];

const recentBookings = [
    {
      guest: "John D.",
      property: "Villa Ubud",
      dates: "May 21 – May 24",
      duration: "3 Nights",
      status: "Confirmed",
    },
    {
      guest: "Lisa W.",
      property: "Kuta Loft",
      dates: "May 19 – May 22",
      duration: "3 Nights",
      status: "Pending",
    },
    {
      guest: "Mark T.",
      property: "Seminyak Retreat",
      dates: "May 15 – May 18",
      duration: "3 Nights",
      status: "Confirmed",
    },
    {
      guest: "Anna B.",
      property: "Canggu Hideout",
      dates: "May 10 – May 13",
      duration: "3 Nights",
      status: "Pending",
    },
  ];

export default function BookingHost() {
  return (
    <div className="text-black">
      <div className="flex font-bold mb-5 justify-between ">
        <h1 className="text-2xl">Dashboard OverView111</h1>
        <CircleUserRound />
      </div>
      <section className="grid gap-6 grid-cols-4">
        <RecentBookings getAll bookings={recentBookings} />
      </section>
    </div>
  );
}
