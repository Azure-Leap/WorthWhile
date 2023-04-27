const getTimes = (start, end) => {
  const arr = [],
    dt = new Date("2023-01-01 00:00:00");
  dt.setUTCHours(Number(start.substring(0, 2)));
  console.log(Number(start.substring(0, 2)));

  while (dt.getUTCHours() <= Number(end.substring(0, 2))) {
    arr.push({ isAvailable: true, time: new Date(dt) });
    dt.setUTCHours(dt.getUTCHours() + 1);
  }

  return arr;
};

const availableTimes = getTimes(
  "09:00", //'9
  "17:00" //
); //[{},{}]
console.log(availableTimes);
