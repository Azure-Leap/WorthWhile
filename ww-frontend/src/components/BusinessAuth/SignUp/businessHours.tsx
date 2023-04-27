import { border } from "@mui/system";
import { useState } from "react";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";

type Day = {
  name: string;
  isOpen: boolean;
  startTime: string;
  endTime: string;
};

const days: Day[] = [
  { name: "Monday", isOpen: true, startTime: "09:00", endTime: "17:00" },
  { name: "Tuesday", isOpen: true, startTime: "09:00", endTime: "17:00" },
  { name: "Wednesday", isOpen: true, startTime: "09:00", endTime: "17:00" },
  { name: "Thursday", isOpen: true, startTime: "09:00", endTime: "17:00" },
  { name: "Friday", isOpen: true, startTime: "09:00", endTime: "17:00" },
  { name: "Saturday", isOpen: true, startTime: "09:00", endTime: "17:00" },
  { name: "Sunday", isOpen: true, startTime: "09:00", endTime: "17:00" },
];

const BusinessHourInput = () => {
  const [weekDays, setWeekDays] = useState(days);
  const toggleDay = (index: any) => {
    let selectedDay = weekDays[index];
    selectedDay.isOpen = selectedDay.isOpen === false ? true : false;
    let temp = [...weekDays];
    temp[index] = selectedDay;
    setWeekDays(temp);
  };

  const setTime = (
    index: number,
    key: "startTime" | "endTime",
    value: string
  ) => {
    let newDays = [...weekDays];
    newDays[index][key] = value;
    setWeekDays(newDays);
  };

  return (
    <>
      <h2 className="text-3xl font-medium">Your Business Hours</h2>
      <p className="text-xs text-gray-500">When can clients book with you?</p>
      <div className="flex flex-col text-gray-900">
        {weekDays.map((day, index) => (
          <div
            key={day.name}
            className={`flex items-center justify-between py-4 gap-7 ${
              day.name === "Sunday"
                ? "border-y-2 border-gray-100"
                : " border-t-2 border-gray-100"
            }`}
          >
            <span className="flex items-center gap-3">
              <div
                className={`flex items-center w-14 h-8 rounded-full px-1 ${
                  day.isOpen ? "bg-green-500" : "bg-gray-300"
                }`}
                onClick={(e) => toggleDay(index)}
              >
                <div
                  className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
                    day.isOpen ? "translate-x-6" : ""
                  }`}
                />
              </div>
              <p className="font-medium">{day.name}</p>
            </span>
            {/* Times starts from here */}
            <div className="flex items-center space-x-4">
              {day.isOpen ? (
                <div className="flex space-x-2">
                  <input
                    type="time"
                    value={day.startTime}
                    onChange={(e) =>
                      setTime(index, "startTime", e.target.value)
                    }
                  />
                  <span>-</span>
                  <input
                    type="time"
                    value={day.endTime}
                    onChange={(e) => setTime(index, "endTime", e.target.value)}
                  />
                </div>
              ) : (
                <p>Closed</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BusinessHourInput;
