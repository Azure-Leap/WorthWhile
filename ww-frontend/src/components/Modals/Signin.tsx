import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/variables";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Snackbar,
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

export default function SignIn({ setIsSign, setOpen }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData, user, setToken } = useContext(AuthContext);
  const { setMessage, setStatus, message } = useContext(AlertContext);

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
  const signin = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/users/signin`, {
        email,
        password,
      });
      setMessage(res.data.message);
      setStatus("success");
      setUserData(res.data.user);
      setToken(res.data.token);
      setOpen(false);
    } catch (error: any) {
      setStatus("error");
      if (!user) {
        setMessage("Имэйл эсвэл нууц үг буруу байна!");
      }
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
        <Avatar sx={{ m: 1, bgcolor: "rgb()" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            alt="defaultImg"
          />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            value={email}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={changeEmail}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                signin();
              }
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={password}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            className="bg-cyan-500"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: "white" }}
            onClick={() => {
              signin();
            }}
          >
            Sign In
          </Button>
          <Grid container sx={{ flexDirection: "column" }}>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={() => setIsSign(false)} href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5, mb: 4 }} />
    </Container>
  );
}
