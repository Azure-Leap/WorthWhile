import React, { useState } from "react";
import moment from "moment";

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
  const [times, setTimes] = useState([]);
  const [selectedDay, setSelectedDay] = useState(new Date());
  const week = [];
  const openValues = [];
  const today = new Date();
  const dayNumber = today.setMinutes(0, 0, 0);

  const getDateDatas = () => {
    for (let i = 0; i < 7; i++) {
      const dayNum = dayNumber + i * 24 * 60 * 60 * 1000;
      const dayObject = new Date(dayNum);
      week.push(dayObject);
      // const idx = businessHours.findIndex(
      //   (el) => el.name === moment(dayNumber).format("dddd")
      // );
      // const open = businessHours[idx].isOpen;
      // openValues.push(open);
      // let start = Number(businessHours[idx].startTime.substring(0, 2));
      // const end = Number(businessHours[idx].endTime.substring(0, 2));
    }
  };

  console.log(week);

  // const getTimes = (start, end) => {
  //   const timesArr = [];
  //   while (start <= end) {
  //     timesArr.push(selectedDay.setHours(start));
  //     start = start + 1;
  //   }
  //   return timesArr;
  // };

  getDateDatas();

  return (
    <div>
      <div>
        {week.map((el, i) => (
          <button key={i}>dfd</button>
        ))}
      </div>
      <div>
        {times.map((el, i) => (
          <button key={i}>{moment(el).format("HH:mm")}</button>
        ))}
      </div>
    </div>
  );
};

export default index;
