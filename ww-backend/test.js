const getTimes = (start, end) => {
  const arr = [],
    dt = new Date("2023-01-01 00:00:00");
  dt.setUTCHours(start);
  console.log(dt.getUTCHours());

  while (dt.getUTCHours() <= end) {
    arr.push({ isAvailable: true, time: new Date(dt) });
    dt.setUTCHours(dt.getUTCHours() + 1);
  }

  return arr;
};

const availableTimes = getTimes(
  1, //'9
  9 //
); //[{},{}]
console.log(availableTimes);
