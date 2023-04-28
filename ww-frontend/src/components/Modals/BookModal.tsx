import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Typography } from "@mui/material";
import { OrderContext } from "@/context/orderContext";

const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const BookModal = () => {
  const { setOpen, setModal } = useContext(OrderContext);
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          position: "relative",
          marginTop: "-15px",
          paddingBottom: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          May 2023
        </Typography>
        <CloseIcon
          onClick={() => setOpen(false)}
          sx={{ position: "absolute", top: "5px", right: "-15px" }}
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          gridGap: "10px",
          paddingBottom: "20px",
        }}
      >
        {arr.map(() => (
          <Box
            sx={{
              padding: "15px 0",
              border: "1px solid #E6E5E5",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{ color: "grey", fontSize: "12px", marginBottom: "12px" }}
            >
              Wed
            </Typography>
            <Typography sx={{ color: "grey" }}>26</Typography>
          </Box>
        ))}
      </Box>
      <hr />
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
          <button
            style={{
              width: "calc(100%/3)",
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "5px",
              boxShadow: "0 0 4px 0 rgba(0,0,0,0.1)",
            }}
          >
            Morning
          </button>
          <button
            style={{
              width: "calc(100%/3)",
              borderRadius: "8px",
              padding: "5px",
            }}
          >
            Afternoon
          </button>
          <button
            style={{
              width: "calc(100%/3)",
              borderRadius: "8px",
              padding: "5px",
            }}
          >
            Evening
          </button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6,1fr)",
          gridGap: "7px",
        }}
      >
        {arr2.map(() => (
          <button style={{ border: "1px solid #E6E5E5", borderRadius: "8px" }}>
            9:00
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
          <Typography>Men's Haircut</Typography>
          <Box sx={{ marginBottom: "15px" }}>
            <Typography sx={{ textAlign: "end" }}>$23.00+</Typography>
            <Typography sx={{ fontSize: "12px", color: "grey" }}>
              9:00 - 9:30
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
            <img
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                marginRight: "6px",
              }}
              src="https://laneip.com/wp-content/uploads/2022/11/placeholder_pale.png"
              alt="userImg"
            />
            <Typography>Anyone</Typography>
          </Box>
          <button
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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <AddIcon />
        <Typography>Add another service</Typography>
      </Box>
      <Box sx={{ width: "100%", borderTop: "1px solid #E6E5E5" }}>
        <Box sx={{ textAlign: "end", marginRight: "30px" }}>
          <Typography sx={{ fontSize: "14px", color: "grey" }}>
            Total
          </Typography>
          <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
            $23.00+
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "grey" }}>
            30min
          </Typography>
        </Box>
        <Button
          onClick={() => setModal("ConfirmModal")}
          variant="contained"
          sx={{ backgroundColor: "rgb(6 182 212)", width: "100%" }}
        >
          Book
        </Button>
      </Box>
    </Box>
  );
};

export default BookModal;
