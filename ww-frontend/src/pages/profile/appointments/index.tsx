import React, { useContext, useEffect, useState } from "react";
import SideLayout from "@/components/SideLayout";
import Appointments from "./appointment";
import EmptyAppointment from "./empty";
import { AuthContext } from "@/context/authContext";
import axios from "axios";
import { BASE_URL } from "@/variables";

export default function App() {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/users/appointments?userId=${user?._id}`
      );
      setAppointments(res.data.appointments);
    } catch (error) {
      console.log("Error", error);
    }
  };
  user && getAppointments();

  return (
    <SideLayout>
      {appointments?.length ? (
        <Appointments appointments={appointments} />
      ) : (
        <EmptyAppointment />
      )}
    </SideLayout>
  );
}
