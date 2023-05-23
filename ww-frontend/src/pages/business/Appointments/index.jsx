import BusinessLayout from "@/components/BusinessLayout";
import React, { useState, useContext, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import axios from "axios";
import { AuthContext } from "@/context/authContext";
import { AlertContext } from "@/context/alertContext";
import { BASE_URL } from "@/variables";

const events = [{ title: "Meeting", start: new Date(), daysOfWeek: [3, 5] }];

const Appointments = () => {
  const { businessUser, setBusinessUser } = useContext(AuthContext);
  const { setMessage, setStatus } = useContext(AlertContext);
  const id = businessUser?._id;

  const [appointments, setAppointments] = useState();
  useEffect(() => {
    axios
      .get(`${BASE_URL}/business/appointments?businessId=${id}`)
      .then((res) => {
        console.log("App data==>", res.data.appointments);
        setAppointments(res.data.appointments);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [businessUser]);

  return (
    <BusinessLayout>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={events}
          height={800}
          // eventContent={renderEventContent}
        />
      </div>
    </BusinessLayout>
  );
};

export default Appointments;
