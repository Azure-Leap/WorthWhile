import React from "react";
import SideLayout from "@/components/SideLayout";
import Appointments from "./appointment";
import Empty from "./empty";

export default function App() {
  const [isAppointmentIn, setIsAppointmentIn] = React.useState(false);
  let template;
  if (isAppointmentIn) {
    template = <Empty />;
  } else {
    template = <Appointments />;
  }
  return (
    <div>
      <SideLayout>{template}</SideLayout>
    </div>
  );
}
