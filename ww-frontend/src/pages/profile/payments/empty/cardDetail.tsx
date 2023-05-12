import * as React from "react";
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

const CardDetail = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [bank, setBank] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setBank(event.target.value as string);
  };

  const addPayment = async () => {
    try {
      const res = await axios.post("");
    } catch (error) {
      console.log("Error", error);
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
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
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
                  value={bank}
                  label="Select bank"
                  onChange={handleChange}
                >
                  <MenuItem value={"Хаан банк"}>Хаан банк</MenuItem>
                  <MenuItem value={"Голомт банк"}>Голомт банк</MenuItem>
                  <MenuItem value={"Хас банк"}>Хас банк</MenuItem>
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
            type="submit"
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
            onClick={addPayment}
          >
            Add Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CardDetail;
