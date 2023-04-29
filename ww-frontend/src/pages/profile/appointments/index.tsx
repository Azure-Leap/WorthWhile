import React, { useEffect, useState } from "react";
import SideLayout from "@/components/SideLayout";
import Appointments from "./appointment";
import EmptyAppointment from "./empty";
import axios from "axios";

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

  // useEffect(() => {
  //   axios.get("http://localhost:8888/appointments/");
  // });

  return (
    <SideLayout>
      {apps.length ? <Appointments apps={apps} /> : <EmptyAppointment />}
    </SideLayout>
  );
}
