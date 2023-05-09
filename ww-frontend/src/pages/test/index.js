import React, { useState } from "react";
import dayjs from "dayjs";

const businessHours = [
  { name: "Monday", startTime: "09:00", endTime: "17:00", isOpen: true },
  { name: "Tuesday", startTime: "09:00", endTime: "17:00", isOpen: true },
  { name: "Wednesday", startTime: "12:00", endTime: "17:00", isOpen: true },
  { name: "Thursday", startTime: "09:00", endTime: "17:00", isOpen: true },
  { name: "Friday", startTime: "09:00", endTime: "21:00", isOpen: true },
  { name: "Saturday", startTime: "09:00", endTime: "17:00", isOpen: false },
  { name: "Sunday", startTime: "09:00", endTime: "17:00", isOpen: false },
];

const index = () => {
  return <div>{dayjs(1683086400496).format("YYYY-MM-DD HH:mm")}</div>;
};

export default index;
