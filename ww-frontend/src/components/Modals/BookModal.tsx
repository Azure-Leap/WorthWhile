import React, { useContext, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Typography } from "@mui/material";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import { OrderContext } from "@/context/orderContext";
import dayjs from "dayjs";
import BeatLoader from "react-spinners/BeatLoader";

const style = {
  "&:hover #addicon": {
    transform: "rotate(180deg)",
  },
  display: "flex",
};

const BookModal = () => {
  const {
    setOpen,
    setModal,
    selectedServices,
    setSelectedServices,
    service,
    setService,
    dateNumber,
    setDateNumber,
    times,
    dateS,
    changeDate,
    day,
    setDay,
    staffer,
    setStaffer,
    setSelectedGiftcard,
  } = useContext(OrderContext);
  const [index, setIndex] = useState(0);

  const totalDuration = selectedServices.reduce((total: any, el: any) => {
    return total + el.duration;
  }, 0);
  const totalPrice = selectedServices.reduce((total: any, el: any) => {
    return total + el.servicePrice.price;
  }, 0);
  const isMinPrice = selectedServices.find(
    (el: any) => el.servicePrice.isMin === true
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <BeatLoader color={"#000"} loading={loading} size={15} />
        </div>
      ) : (
        <Box sx={{ width: "100%", position: "relative" }}>
          <Box
            sx={{
              position: "relative",
              marginTop: "-15px",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "medium",
                textAlign: "center",
              }}
            >
              May 2023
            </Typography>
            <button>
              <CloseIcon
                onClick={() => {
                  setOpen(false);
                  setStaffer(null);
                  setSelectedServices([]);
                  setService(null);
                  setSelectedGiftcard(null);
                }}
                sx={{
                  position: "absolute",
                  top: "5px",
                  right: "-20px",
                  "&:hover": { transform: "rotate(90deg)" },
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </button>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7,1fr)",
              gridGap: "10px",
              paddingBottom: "20px",
            }}
          >
            {dateS.map((el: any, i: number) => {
              const isSelected = day?.dayName === el.dayName;
              return (
                <button key={i}>
                  <Box
                    onClick={
                      el.open
                        ? () => {
                            setDay(el);
                            changeDate(el.day);
                          }
                        : () => {
                            setDay(el);
                            setDateNumber(null);
                          }
                    }
                    sx={{
                      padding: "15px 0",
                      border: isSelected
                        ? "rgb(8 145 178)"
                        : el.open === false
                        ? "1px solid #F0F0F0"
                        : "1px solid #E6E5E5",
                      borderRadius: "8px",
                      textAlign: "center",
                      backgroundColor: isSelected ? "rgb(6 182 212)" : "none",
                    }}
                  >
                    <Typography
                      sx={{
                        color: isSelected
                          ? "white"
                          : el.open === false
                          ? "#E1E1E1"
                          : "grey",
                        fontSize: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      {dayjs(el.day).format("ddd")}
                    </Typography>
                    <Typography
                      sx={{
                        color: isSelected
                          ? "white"
                          : el.open === false
                          ? "#E1E1E1"
                          : "grey",
                      }}
                    >
                      {dayjs(el.day).format("DD")}
                    </Typography>
                  </Box>
                </button>
              );
            })}
          </Box>
          <hr />
          {day && day?.open === true ? (
            <Box>
              <Box sx={{ margin: "0 auto", width: "60%" }}>
                <Box
                  sx={{
                    display: "flex",
                    margin: "20px 0 30px 0",
                    backgroundColor: "rgb(243 244 246)",
                    borderRadius: "8px",
                    padding: "4px 5px",
                  }}
                >
                  {["Morning", "Afternoon", "Evening"].map((el, i) => (
                    <button
                      onClick={() => setIndex(i)}
                      key={i}
                      style={{
                        width: "calc(100%/3)",
                        borderRadius: "8px",
                        padding: "5px",
                        backgroundColor: index === i ? "white" : "transparent",
                        boxShadow:
                          index === i ? "0 0 4px 0 rgba(0,0,0,0.1)" : "none",
                      }}
                    >
                      {el}
                    </button>
                  ))}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(6,1fr)",
                  gridGap: "7px",
                }}
              >
                {times.map((el: any, i: any) => (
                  <button
                    onClick={() => {
                      setDateNumber(el);
                    }}
                    key={i}
                    style={{
                      backgroundColor:
                        el === dateNumber ? "rgb(6 182 212)" : "transparent",
                      color: el === dateNumber ? "white" : "grey",
                      border:
                        el === dateNumber
                          ? "rgb(8 145 178)"
                          : "1px solid #E6E5E5",
                      borderRadius: "8px",
                    }}
                  >
                    {dayjs(el).format("HH:mm")}
                  </button>
                ))}
              </Box>
              <Box
                sx={{
                  backgroundColor: "rgb(243 244 246)",
                  margin: "30px 0",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>{service.serviceName}</Typography>
                  <Box sx={{ marginBottom: "15px" }}>
                    <Typography sx={{ textAlign: "end" }}>
                      ₮
                      {service.servicePrice.isMin
                        ? service.servicePrice.price + "+"
                        : service.servicePrice.price}
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "grey" }}>
                      {dayjs(dateNumber).format("HH:mm A")} -{" "}
                      {dayjs(dateNumber + service.duration * 60 * 1000).format(
                        "HH:mm A"
                      )}
                    </Typography>
                  </Box>
                </Box>
                <hr style={{ borderTop: "1px solid #D6D5D5" }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "12px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{ width: "25px", height: "25px", marginRight: "6px" }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                        src={
                          staffer
                            ? staffer.staffImg
                            : "https://laneip.com/wp-content/uploads/2022/11/placeholder_pale.png"
                        }
                        alt="userImg"
                      />
                    </Box>
                    <Typography sx={{ fontSize: "14px" }}>
                      {staffer ? staffer.stafferName : "Anyone"}
                    </Typography>
                  </Box>
                  <button
                    onClick={() => setModal("ChooseStaffer")}
                    style={{
                      backgroundColor: "white",
                      padding: "5px 20px",
                      borderRadius: "20px",
                      border: "1px solid #D6D5D5",
                      fontSize: "14px",
                    }}
                  >
                    Change
                  </button>
                </Box>
              </Box>
              <button style={{ marginBottom: "20px" }}>
                <Box sx={style}>
                  <AddIcon
                    id="addicon"
                    sx={{
                      color: "rgb(6 182 212)",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "rgb(6 182 212)",
                      paddingTop: "1.5px",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Add another service
                  </Typography>
                </Box>
              </button>
              <Box
                sx={{
                  width: "100%",
                  borderTop: "1px solid #E6E5E5",
                  position: "sticky",
                  bottom: 0,
                  right: 0,
                  backgroundColor: "white",
                  paddingBottom: "3rem",
                }}
              >
                <Box sx={{ textAlign: "end", padding: "20px 0" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "grey",
                        marginRight: "20px",
                      }}
                    >
                      Total:
                    </Typography>
                    <Typography sx={{ fontSize: "30px", fontWeight: "medium" }}>
                      ₮{isMinPrice ? totalPrice + "+" : totalPrice}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "14px", color: "grey" }}>
                    {totalDuration}min
                  </Typography>
                </Box>
                <Button
                  className="bg-cyan-500"
                  variant="contained"
                  onClick={() => {
                    setModal("ConfirmModal");
                  }}
                  sx={{ width: "100%", color: "white" }}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "100px",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <EventOutlinedIcon
                  sx={{
                    fontSize: "50px",
                    color: "#E6E5E5",
                    marginBottom: "5px",
                  }}
                />
                <CloseIcon
                  sx={{
                    fontSize: "16px",
                    position: "absolute",
                    top: "24.2px",
                    right: "11.7px",
                    color: "#DC3535",
                  }}
                />
              </Box>

              <Typography sx={{ color: "grey", fontSize: "14px" }}>
                Sorry, there are no available slots on {day?.dayName},{" "}
                {dayjs(day?.dayVal).format("MMMM")}{" "}
                {dayjs(day?.dayVal).format("D")}
              </Typography>
              <Typography sx={{ color: "grey", fontSize: "14px" }}>
                Please select another day
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </div>
  );
};

export default BookModal;
