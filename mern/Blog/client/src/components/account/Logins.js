import React, { useState } from "react";
import { Box, TextField, Button, styled } from "@mui/material";
import { API } from "../../service/api";
const LoginComponent = styled(Box)`
  width: 400px;
  box-shadow: 26px 29px 22px -6px rgba(178, 161, 161, 0.53);
  margin: 5vh auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: space-between;
  & > div,
  & > button {
    margin-top: 3vh;
  }
  padding: 1vw;
`;

const Image = styled("img")({
  display: "block",
  width: "100%",
  height: "35vh",
  boxShadow: "26px 29px 22px -6px rgba(178, 161, 161, 0.53)",
});

const initialStateInput = {
  username: "",
  email: "",
  password: "",
};

const Login = (props) => {
  const [signup, setSignup] = useState(initialStateInput);
  const signupUser = async () => {
    await API.userSignup(signup);
  };
  const [account, setAccount] = useState(false);

  function createAccount() {
    setAccount(!account);
  }
  // function setAccountFalse() {
  //   setAccount(false);
  // }
  const img =
    "https://images.freeimages.com/variants/2B3oqERNAaMavsuRKQtTn4jH/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d";

  const [value, setValue] = useState(initialStateInput);

  const valueSetter = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <LoginComponent>
      <Image src={img} alt="Login logo"></Image>
      <TextField
        variant="standard"
        label="User Name"
        name="username"
        onChange={valueSetter}
      ></TextField>
      {account && (
        <TextField
          variant="standard"
          label="Email"
          name="email"
          onChange={valueSetter}
        ></TextField>
      )}
      <TextField
        variant="standard"
        label="Password"
        type="password"
        name="password"
        onChange={valueSetter}
      ></TextField>

      {/* {!account && <Button variant="contained">Sign In</Button>} */}
      <Button variant="contained" onClick={signupUser}>
        {account ? "Sign Up" : "sign In"}
      </Button>
      <hr></hr>
      <span>OR</span>
      <Button variant="contained" onClick={createAccount}>
        {account ? "Sign Up" : "Already have account"}
      </Button>
    </LoginComponent>
  );
};
export default Login;
