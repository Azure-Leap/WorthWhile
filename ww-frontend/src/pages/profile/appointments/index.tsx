import React, { useEffect, useState } from "react";
import SideLayout from "@/components/SideLayout";
import Appointments from "./appointment";
import EmptyAppointment from "./empty";

interface IAppointments {
  services: string;
  barber: string;
  startTime: Date;
}

export default function App() {
  const [apps, setApps] = useState<IAppointments[]>([
    {
      services: "Beard trim",
      barber: "Byambaa",
      startTime: new Date(),
    },
    {
      services: "HairCut",
      barber: "Tsogtoo",
      startTime: new Date(),
    },
  ]);

  return (
    <SideLayout>
      {apps.length ? <Appointments apps={apps} /> : <EmptyAppointment />}
    </SideLayout>
  );
}
