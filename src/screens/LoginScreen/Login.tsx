import React, { useState } from "react";
import "./Login.style.scss";
import pablo from "../../assets/images/pablo.png";
import union from "../../assets/images/Union.png";
import lendsqr from "../../assets/images/lendsqr.png";
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import { useNavigate } from "react-router-dom";
import { Datatype } from "../../components/DataTypeTest/Data.type";

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<Datatype>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitBtnClickHnd = (event: any) => {
    event.preventDefault();
    navigate("/dashboard");
  };
  return (
    <section className="login-main">
      <div className="login-border-div">
        <div className="first-content-div">
          <div className="title-img">
            <div className="title-union-img-size">
              {" "}
              <img src={union} alt="hvf" className="union-img" />
            </div>
            <div className="title-union-img-size2">
              {" "}
              <img src={lendsqr} alt="lends" className="lends-img" />
            </div>
          </div>
          <div className="img-div">
            <img src={pablo} alt="hvv" className="img-img-div" />
          </div>
        </div>

        <div className="second-content-div">
          <form onSubmit={onSubmitBtnClickHnd}>
            <div className="log-tit">
              {" "}
              <h4 className="welcome">Welcome!</h4>
              <p className="p">Enter details to login</p>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <TextField
                id="outlined-basic"
                type="email"
                label="Email"
                required
                variant="outlined"
                className="email-input"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <FormControl variant="outlined" className="email-input">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  required
                  id="outlined-adornment-password"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        //   aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <h6 className="green-s">HIDE</h6>
                        ) : (
                          <h6 className="green-s">SHOW</h6>
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>

            <p className="p-forgot">FORGOT PASSWORD?</p>
            <div>
              <button className="btn-login" type="submit">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
