import { useContext, useState } from "react";
import axios from "axios";
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
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

const theme = createTheme();

export default function SignUp({ setIsSign, setOpen }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { setUser, user, setToken } = useContext(AuthContext);
  const { setMessage, setAlert, setStatus } = useContext(AlertContext);

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
    console.log("signup");
    if (!email || !userName || !password || !rePassword || !phoneNumber) {
      console.log("medeelel dutuu");
      setStatus("error");
      setMessage("Мэдээллийг бүрэн бөглөнө үү");
      setAlert(true);
      return;
    }
    if (password !== rePassword) {
      console.log("pass zurvvtei");
      setStatus("error");
      setMessage("Нууц үг хоорондоо таарахгүй байна!!!");
      setAlert(true);
      return;
    }
    try {
      const res = await axios.post("http://localhost:8888/users/signup", {
        userName,
        email,
        password,
        phoneNumber,
      });
      setUser(res.data.user);
      setToken(res.data.token);
      setStatus("succes");
      setMessage(res.data.message);
      setAlert(true);
      console.log("USER", user);
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message);
      setAlert(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
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
                  autoComplete="re-password"
                  onChange={changeRePassword}
                />
              </Grid>
            </Grid>
            <Button
              onClick={() => {
                signup();
              }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
    </ThemeProvider>
  );
}
