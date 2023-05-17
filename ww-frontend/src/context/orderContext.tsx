import { useState, createContext, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { BASE_URL } from "@/variables";

export const OrderContext = createContext<any>(null);

const OrderProvider = ({ children }: any) => {
  const [services, setServices] = useState([]); //tuhain salonii buh uilchilgeenvvd
  const [selectedServices, setSelectedServices] = useState([]); //uilchluulegchiin songoson uilchilgeenuud
  const [service, setService] = useState(null); //anhnii book towch darj songoson uilchilgee
  const [allServices, setAllServices] = useState(null); //Services collectionii buh uilchilgee
  const [allStaffs, setAllStaffs] = useState([]) as any; //Staffs collectionii buh uschin
  const [staffs, setStaffs] = useState([]) as any; //tuhain salonii uschid
  const [staffer, setStaffer] = useState(null) as any; //uilchluulegchiin songoson uschin
  const [business, setBusiness] = useState<any>(null);
  const [dateNumber, setDateNumber] = useState(null); //songogdson tsag number helbereer
  const [day, setDay] = useState<any>(null);
  const [modal, setModal] = useState("BookModal");
  const [open, setOpen] = useState(false);
  const [times, setTimes] = useState([]); //
  const [dateS, setDates] = useState<any>([]);
  const [selectedGiftcard, setSelectedGiftcard] = useState(null);

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
        if (!staffer.orders.includes(resultFormat)) {
          arr.push(result);
        }
      } else {
        staffs?.map((staff: any) => {
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

  useEffect(() => {
    const getAllServices = async () => {
      const res = await axios.get(`${BASE_URL}/services`);
      setAllServices(res.data.services);
    };
    getAllServices();
    const getAllStaffs = async () => {
      const res = await axios.get(`${BASE_URL}/staffs`);
      setAllStaffs(res.data.staffs);
    };

    getAllStaffs();
  }, [service]);

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
        selectedGiftcard,
        setSelectedGiftcard,
        allServices,
        setAllServices,
        allStaffs,
        setAllStaffs,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
