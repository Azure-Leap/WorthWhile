import React, { useState } from "react";
import SideLayout from "@/components/SideLayout";
import Appointments from "./appointment";
import EmptyAppointment from "./empty";

interface IAppointments {
  services: string;
  totalPrice: number;
  startTime: Date;
}

export default function App() {
  const [apps, setApps] = useState<IAppointments[]>([
    {
      services: "Beard trim",
      totalPrice: 15,
      startTime: new Date(2023, 1, 15),
    },
    {
      services: "HairCut",
      totalPrice: 51,
      startTime: new Date(2023, 4, 25),
    },
  ]);

  return (
    <SideLayout>
      {apps.length ? <Appointments apps={apps} /> : <EmptyAppointment />}
    </SideLayout>
  );
}
