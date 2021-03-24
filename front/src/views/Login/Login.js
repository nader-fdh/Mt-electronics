import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/authActions";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { checkUser } from "../../actions/authActions";
import Navbar from "../../components/homePage/NavBar/index";
import DropDown from "../../components/homePage/DropDown";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Welcom to © "}
      <Link color="inherit" href="https://material-ui.com/">
        Mt electronics
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ history }) {
  const classes = useStyles();
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(info));
  };
  const [errors, setErrors] = useState(null);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.isAuth) {
      history.push("/admin");
    }
    if (auth.errors) {
      setErrors(auth.errors);
    }
  }, [auth.isAuth, auth.errors]);
  useEffect(() => {
    dispatch(checkUser());
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <>
        <Navbar toggle={toggle} />
        <DropDown isOpen={isOpen} toggle={toggle} />
      </>
      <div>
        <Container
          component="main"
          maxWidth="xs"
          style={{ marginTop: "200px" }}
        >
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={login}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handlechange}
                onFocus={() => setErrors(null)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlechange}
                onFocus={() => setErrors(null)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    {errors && errors.map((el) => <h4>{el.msg}</h4>)}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </div>
  );
}
