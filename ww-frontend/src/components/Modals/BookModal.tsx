import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";

const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const BookModal = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        May 2023
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          gridGap: "10px",
          paddingBottom: "20px",
          margin: "0 7px",
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
      <hr style={{ margin: "0 30px" }} />
      <Box sx={{ margin: "0 auto", width: "60%" }}>
        <Box
          sx={{
            display: "flex",
            margin: "20px 0 30px 0",
            backgroundColor: "#E6E5E5",
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
          margin: "0 30px",
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
          backgroundColor: "#E6E5E5",
          margin: "30px",
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
      <Box sx={{ display: "flex", alignItems: "center", marginLeft: "27px" }}>
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
        <Button variant="contained" color="success">
          Book
        </Button>
      </Box>
    </Box>
  );
};

export default BookModal;
