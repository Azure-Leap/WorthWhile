import { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/variables";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { AuthContext } from "../../context/authContext";
import { AlertContext } from "../../context/alertContext";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        WorthWhile
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp({ setIsSign, setOpen }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { setUserData, token, setToken } = useContext(AuthContext);
  const { setMessage, setStatus } = useContext(AlertContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  const changeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const changePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const changeUsername = (e: any) => {
    setUserName(e.target.value);
  };
  const changeRePassword = (e: any) => {
    setRePassword(e.target.value);
  };
  const changePhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  const signup = async () => {
    if (!email || !userName || !password || !rePassword || !phoneNumber) {
      setStatus("error");
      setMessage("Мэдээллийг бүрэн бөглөнө үү!");

      return;
    }
    if (password !== rePassword) {
      setStatus("error");
      setMessage("Нууц үг хоорондоо таарахгүй байна!");
      return;
    }
    try {
      const res = await axios.post(`${BASE_URL}/users/signup`, {
        userName,
        email,
        password,
        phoneNumber,
      });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setToken(res.data.token);
      setMessage(res.data.message);
      setStatus("success");
      setUserData(res.data.user);
      setOpen(false);
    } catch (error: any) {
      setStatus("error");
      setMessage("Бүртгэлтэй имэйл байна!");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            alt="defaultImg"
          />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                value={userName}
                onChange={changeUsername}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    signup();
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={changeEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="number"
                label="Phone number"
                name="number"
                autoComplete="phone-number"
                value={phoneNumber}
                onChange={changePhoneNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                autoComplete="new-password"
                onChange={changePassword}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="re-password"
                label="Re-Password"
                type="password"
                id="re-password"
                value={rePassword}
                autoComplete="re-password"
                onChange={changeRePassword}
              />
            </Grid>
          </Grid>
          <Button
            onClick={() => {
              signup();
            }}
            className="bg-cyan-500"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: "white" }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={() => setIsSign(true)} href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5, mb: 4 }} />
    </Container>
  );
}
