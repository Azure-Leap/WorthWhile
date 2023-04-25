import { useState } from "react";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";

type Day = {
  name: string;
  isOpen: boolean;
  startTime: string;
  endTime: string;
};

const days: Day[] = [
  { name: "Monday", isOpen: false, startTime: "09:00", endTime: "17:00" },
  { name: "Tuesday", isOpen: false, startTime: "09:00", endTime: "17:00" },
  { name: "Wednesday", isOpen: false, startTime: "09:00", endTime: "17:00" },
  { name: "Thursday", isOpen: false, startTime: "09:00", endTime: "17:00" },
  { name: "Friday", isOpen: false, startTime: "09:00", endTime: "17:00" },
  { name: "Saturday", isOpen: false, startTime: "09:00", endTime: "17:00" },
  { name: "Sunday", isOpen: false, startTime: "09:00", endTime: "17:00" },
];

const BusinessHourInput = () => {
  const [checked, setChecked] = useState(true);

  const toggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
  };

  const [weekDays, setWeekDays] = useState(days);

  const toggleDay = (index: number) => {
    const newDays = [...weekDays];
    newDays[index].isOpen = !newDays[index].isOpen;
    setWeekDays(newDays);
  };

  const setTime = (
    index: number,
    key: "startTime" | "endTime",
    value: string
  ) => {
    const newDays = [...weekDays];
    newDays[index][key] = value;
    setWeekDays(newDays);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div
        className={`flex items-center w-14 h-8 rounded-full px-1 ${
          checked ? "bg-green-500" : "bg-gray-300"
        }`}
        onClick={toggle}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
            checked ? "translate-x-6" : ""
          }`}
        />
      </div>
      {weekDays.map((day, index) => (
        <div key={day.name} className="flex items-center justify-between">
          <span className="font-medium">{day.name}</span>
          <div className="flex items-center space-x-4">
            <button
              className={`px-2 py-1 rounded ${
                day.isOpen
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => toggleDay(index)}
            >
              {day.isOpen ? <FiToggleRight /> : <FiToggleLeft />}
            </button>
            {day.isOpen && (
              <div className="flex space-x-2">
                <input
                  type="time"
                  value={day.startTime}
                  onChange={(e) => setTime(index, "startTime", e.target.value)}
                />
                <span>to</span>
                <input
                  type="time"
                  value={day.endTime}
                  onChange={(e) => setTime(index, "endTime", e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessHourInput;
