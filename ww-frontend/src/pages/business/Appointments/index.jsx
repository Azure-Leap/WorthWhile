import BusinessLayout from "@/components/BusinessLayout";
import React, { useState, useContext, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";
import { AuthContext } from "@/context/authContext";
import { AlertContext } from "@/context/alertContext";
const events = [{ title: "Meeting", start: new Date() }];

const Appointments = () => {
  const { businessUser, setBusinessUser } = useContext(AuthContext);
  const { setMessage, setStatus } = useContext(AlertContext);

  console.log("BusinessUser===>", businessUser._id);
  const id = businessUser?._id;

  const [appointments, setAppointments] = useState();
  useEffect(() => {
    axios
      .get(
        `http://localhost:8888/business/appointments?businessId=644aad567ede9d3d3d42de83`
      )
      .then((res) => {
        console.log("App data==>", res.data);
        setAppointments(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [id]);
  return (
    <BusinessLayout>
      <div>
        <h1>Demo App</h1>

        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={events}
          // eventContent={renderEventContent}
        />
      </div>
    </BusinessLayout>
  );
};

export default Appointments;