import { useState, createContext, useEffect } from "react";
import dayjs from "dayjs";

export const OrderContext = createContext<any>(null);

const OrderProvider = ({ children }: any) => {
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [service, setService] = useState(null);
  const [staffs, setStaffs] = useState([]) as any;
  const [staffer, setStaffer] = useState(null) as any;
  const [business, setBusiness] = useState<any>(null);
  const [dateNumber, setDateNumber] = useState(null);
  const [day, setDay] = useState<any>(null);
  const [modal, setModal] = useState("BookModal");
  const [open, setOpen] = useState(false);
  const [times, setTimes] = useState([]);
  const [dateS, setDates] = useState<any>([]);

  const getTimes = (date: Date, start: any, end: any) => {
    const arr: any = [];
    const dt = new Date(date || "");
    dt.setMinutes(0, 0, 0);
    dt.setHours(Number(start?.substring(0, 2)));

    while (dt.getHours() <= Number(end?.substring(0, 2))) {
      const newDate = new Date(dt);
      const result = newDate.getTime();
      const resultFormat = dayjs(result).format("YYYY-MM-DD HH:mm");

      if (staffer) {
        console.log("staffer songogdson", staffer.stafferName);
        console.log("SO", staffer.orders);
        console.log("result", resultFormat);
        if (!staffer.orders.includes(resultFormat)) {
          arr.push(result);
        }
      } else {
        staffs.map((staff: any) => {
          if (!staff.orders.includes(resultFormat) && !arr.includes(result)) {
            arr.push(result);
          }
        });
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
    if (business?.businessHours[idx].isOpen) {
      setDateNumber(t[0]);
    }
  };

  const changeDateByStaffer = (selectedDay: any) => {
    const idx = business?.businessHours.findIndex(
      (el: any) => el.name === dayjs(selectedDay).format("dddd")
    );

    const t: any = getTimes(
      selectedDay,
      business?.businessHours[idx]?.startTime,
      business?.businessHours[idx]?.endTime
    );

    setTimes(t);
  };

  useEffect(() => {
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
    setDay(arr[0]);
    changeDate(dateS[0]?.day); //times
  }, [service]);

  useEffect(() => {
    changeDateByStaffer(dateNumber);
  }, [staffer]);

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
        setDateNumber,
        dateNumber,
        times,
        dateS,
        changeDate,
        day,
        setDay,
        setStaffer,
        service,
        setService,
        selectedServices,
        setSelectedServices,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
