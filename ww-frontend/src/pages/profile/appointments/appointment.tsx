import React from "react";
import Avatar from "@mui/material/Avatar";
import dayjs from "dayjs";

const Appointments = ({ appointments }: { appointments: any[] }) => {
  return (
    <div className="ml-5 mt-2 ">
      <div>
        <h1 className="text-2xl ">Appointments</h1>
        <h2 className="my-5">Finished Appointments</h2>
      </div>
      <div>
        {appointments &&
          appointments.map((appointment: any, i: number) => {
            const serviceNameArr = appointment.services.map(
              (service: any) => service.serviceName
            );
            return (
              <div
                key={i}
                className="flex my-10 border-gray-300 border-2 rounded-xl p-5 min-w-full shadow-xl "
              >
                <div className="border-r-2 w-96">
                  <h1 className="text-xl font-bold">
                    {serviceNameArr.join(", ")}
                  </h1>
                  <div className="flex my-2">
                    <Avatar
                      sx={{
                        width: 25,
                        height: 25,
                      }}
                      alt="staffer"
                      src={appointment.stafferId.staffImg}
                    />
                    <h3 className="pl-2">
                      {appointment.stafferId.stafferName}
                    </h3>
                  </div>
                </div>
                <div className="pl-5 flex items-center">
                  {dayjs(appointment.startDate).format("MMM DD HH:mm ddd")}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Appointments;
