import React from "react";
import Button from "@mui/material/Button";
interface IAppointments {
  services: string;
  totalPrice: number;
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
        {apps.map((app: IAppointments, i: number) => (
          <div
            key={i}
            className="flex my-10 border-gray-300 border-2 rounded-xl p-5 min-w-full "
          >
            <div className="border-r-2 w-96">
              <h1 className="text-2xl">{app.services}</h1>
              <h3 className="text-xl">{app.totalPrice}</h3>
              <Button
                sx={{
                  bgcolor: "lime",
                  color: "white",
                  marginTop: 2,
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
            {/* <div className="flex align-middle">{app.startTime}</div> */}
            <div className="w-96"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
