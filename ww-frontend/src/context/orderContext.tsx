import { useState, createContext, useEffect } from "react";
import dayjs from "dayjs";

export const OrderContext = createContext<any>(null);

const OrderProvider = ({ children }: any) => {
  const [services, setServices] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [staffer, setStaffer] = useState(null);
  const [business, setBusiness] = useState<any>(null);
  const [dateNumber, setDateNumber] = useState(null);
  const [modal, setModal] = useState("BookModal");
  const [open, setOpen] = useState(false);

  //================

  const [times, setTimes] = useState([]);
  const [dateS, setDates] = useState<any>([]);

  const getDays = () => {
    const arr = [];
    const dateVal = Date.now();

    for (let i: number = 0; i < 7; i++) {
      const dayVal = dateVal + i * 24 * 60 * 60 * 1000;
      const idx = business?.businessHours.findIndex(
        (el: any) => el.name === dayjs(dayVal).format("dddd")
      );
      arr.push({
        dayName: dayjs(dayVal).format("dddd"),
        day: dayVal,
        open: business?.businessHours[idx].isOpen,
      });
    }
    setDates(arr);
  };
  console.log(dateS);

  const getTimes = (date: Date, start: any, end: any) => {
    const arr: any = [];
    const dt = new Date(date);
    dt.setMinutes(0, 0, 0);
    dt.setHours(Number(start?.substring(0, 2)));

    while (dt.getHours() <= Number(end?.substring(0, 2))) {
      const newDate = new Date(dt);
      const result = newDate.getTime();
      if (!staffer) {
        staffs.map((staff: any) => {
          if (!staff.orders.includes(result) && !arr.includes(result)) {
            arr.push(result);
          }
        });
      } else {
        console.log("STAFFER", staffer);
        // if (!staffer.orders.includes(result)) {
        //   arr.push(result);
        // }
      }
      dt.setHours(dt.getHours() + 1);
    }
    return arr;
  };

  const changeDate = (selectedDay: Date) => {
    const idx = business?.businessHours.findIndex(
      (el: any) => el.name === dayjs(selectedDay).format("dddd")
    );

    const t: any = getTimes(
      selectedDay,
      business?.businessHours[idx].startTime,
      business?.businessHours[idx].endTime
    );
    setTimes(t);
    setDateNumber(t[0]);
  };

  useEffect(() => {
    getDays();
    changeDate(new Date()); //times
  }, [services]);

  return (
    <OrderContext.Provider
      value={{
        modal,
        setModal,
        open,
        setOpen,
        services,
        setServices,
        staffs,
        setStaffs,
        business,
        setBusiness,
        staffer,
        setStaffer,
        setDateNumber,
        dateNumber,
        times,
        dateS,
        changeDate,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
