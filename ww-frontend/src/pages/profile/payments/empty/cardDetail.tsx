import React, { useContext, useEffect, useState } from "react";
import { AlertContext } from "@/context/alertContext";
import { AuthContext } from "@/context/authContext";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";

const CardDetail = ({ handleClose }: any) => {
  const { user, setUserData } = useContext(AuthContext);
  const { setMessage, setStatus } = useContext(AlertContext);

  // const [userId, setUserId] = localStorage.getItem("user", JSON.stringify(data));
  const [ownerName, setOwnerName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiredDate, setExpiredDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [bankName, setBankName] = useState("");

  const changeOwnerName = (e: any) => {
    setOwnerName(e.target.value);
  };

  const changeCardNumber = (e: any) => {
    setCardNumber(e.target.value);
  };

  const changeExpiredDate = (e: any) => {
    setExpiredDate(e.target.value);
  };

  const changeCvv = (e: any) => {
    setCvv(e.target.value);
  };

  const changeBank = (event: SelectChangeEvent) => {
    setBankName(event.target.value as string);
  };

  const addPayment = async () => {
    try {
      const res = await axios.post(`http://localhost:8888/payments`, {
        userId: user._id,
        ownerName,
        cardNumber,
        expiredDate,
        cvv,
        bankName,
      });
      // setUserData(res.data.user);
      console.log(res);
      setMessage(res.data.message);
      setStatus("success");
      handleClose();
    } catch (error) {
      setStatus("error");
      setMessage("err", error);
      console.log("aldaa", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Add Your Payment Card
        </Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={ownerName}
                onChange={changeOwnerName}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">
                  Select Bank
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={bankName}
                  label="Select bank"
                  onChange={changeBank}
                >
                  <MenuItem value={"Khaan bank"}>Хаан банк</MenuItem>
                  <MenuItem value={"Golomt bank"}>Голомт банк</MenuItem>
                  <MenuItem value={"Khas bank"}>Хас банк</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="card-number"
                label="Card Number"
                name="card-number"
                autoComplete="card-number"
                value={cardNumber}
                onChange={changeCardNumber}
                inputProps={{ maxLength: 16 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="expires"
                label="Expires(MM/YY)"
                name="expires"
                autoComplete="expires"
                value={expiredDate}
                onChange={changeExpiredDate}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="cvv"
                label="CVV/CVC"
                type="cvv"
                id="cvv"
                autoComplete="cvv"
                value={cvv}
                onChange={changeCvv}
                inputProps={{ maxLength: 3 }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Хүлээн зөвшөөрч байна."
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: "lime",
              color: "white",
              ":hover": {
                bgcolor: "green",
              },
            }}
            onClick={() => {
              addPayment();
            }}
          >
            Add Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CardDetail;
