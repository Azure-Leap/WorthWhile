import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { OrderContext } from "@/context/orderContext";

const PaymentModal = () => {
  const { setOpen, setModal } = useContext(OrderContext);
  return (
    <Box>
      <Box sx={{ position: "relative", marginTop: "-15px" }}>
        <ArrowBackIosIcon
          onClick={() => setModal("ConfirmModal")}
          sx={{ position: "absolute", top: "5px", left: "-20px" }}
        />
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "medium",
            textAlign: "center",
          }}
        >
          Payment
        </Typography>
        <CloseIcon
          onClick={() => {
            setOpen(false);
            setModal("BookModal");
          }}
          sx={{ position: "absolute", top: "5px", right: "-20px" }}
        />
      </Box>
      <Box>
        <Typography>Choose Payment Card</Typography>
        <Box>
          <div
            style={{
              height: "200px",
              width: "350px",
              borderRadius: "10px",
              backgroundImage:
                "linear-gradient(to right top, #84BAE9, #164E80)",
            }}
          >
            <div className="top-part">
              <div style={{ padding: "12px" }}>
                <img
                  style={{ width: "50px" }}
                  src="https://i.imgur.com/PEKNCj9.png"
                />
              </div>
            </div>
            <div style={{ padding: "0px 15px" }}>
              <div style={{ fontSize: "20px", color: "#fff" }}>
                <span>5200</span> <span>5200</span> <span>5200</span>{" "}
                <span>5200</span>
              </div>
              <div
                style={{
                  fontSize: "15px",
                  padding: "4px 0px",
                  color: "#fff",
                }}
              >
                <span>26/10</span>
              </div>
              <div
                style={{
                  fontSize: "15px",
                  padding: "4px 0px",
                  color: "#fff",
                }}
              >
                <span>Munkhzul Bayarkhuu</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                padding: "0px 24px",
              }}
            >
              <img
                style={{ width: "40px" }}
                src="https://imgur.com/KpIC2Cs.png"
              />
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentModal;

//.card-number{font-size:25px;color:#fff}.date{font-size:15px;padding:4px 0px;color:#fff}.picture{display:flex;justify-content:end;padding:0px 24px}.picture img{width :40px}
