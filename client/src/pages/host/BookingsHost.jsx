export default function BookingHost() {
  return (
    <div className="text-black">
      <div className="flex font-bold mb-5 justify-between ">
        <h1 className="text-2xl">Dashboard OverView</h1>
        <CircleUserRound />
      </div>
      <section className="grid gap-6 grid-cols-4">
        <DashboardStats stats={stats} />
        <RecentBookings bookings={recentBookings} />
      </section>
    </div>
  );
}
