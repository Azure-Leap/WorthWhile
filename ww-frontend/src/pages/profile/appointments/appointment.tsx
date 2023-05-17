import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import dayjs from "dayjs";

interface IAppointments {
  services: string;
  barber: string;
  startTime: Date;
}

const Appointments = ({ apps }: { apps: IAppointments[] }) => {
  return (
    <div className="ml-5 mt-2 ">
      <div>
        <h1 className="text-2xl ">Appointments</h1>
        <h2 className="my-5">Finished Appointments</h2>
      </div>
      <div>
        {apps &&
          apps.map((app: IAppointments, i: number) => (
            <div
              key={i}
              className="flex my-10 border-gray-300 border-2 rounded-xl p-5 min-w-full shadow-xl "
            >
              <div className="border-r-2 w-96">
                <h1 className="text-2xl font-bold">{app.services}</h1>
                <div className="flex my-2">
                  <Avatar
                    sx={{
                      width: 25,
                      height: 25,
                    }}
                    alt="Ashid"
                    src=""
                  />
                  <h3 className="pl-2">{app.barber}</h3>
                </div>

                <Button
                  sx={{
                    bgcolor: "lime",
                    color: "white",
                    paddingLeft: 3,
                    paddingRight: 3,
                    ":hover": {
                      bgcolor: "green",
                    },
                  }}
                >
                  Book Again
                </Button>
              </div>
              <div className="pl-5 flex items-center">
                {dayjs(app.startTime).format("YYYY-MM-DD HH:mm")}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Appointments;
