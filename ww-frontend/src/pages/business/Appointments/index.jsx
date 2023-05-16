import BusinessLayout from "@/components/BusinessLayout";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [{ title: "Meeting", start: new Date() }];
const Appointments = () => {
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
