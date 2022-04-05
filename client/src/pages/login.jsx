import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const [OldPassword, setOldPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [error, seterror] = useState("");
  const input = useRef();
  const inputRef = useRef();

  console.log(props);
  const changePassword = () => {
    let data = {
      userId: OldPassword,
      NewPassword: NewPassword,
    };
    console.log(inputRef.current.value);
    if (NewPassword) {
      seterror("");
      axios
        .post("http://localhost:4040/api/v1/login", data)
        .then((res) => {
          if (res.status === 200) {
            setOldPassword("");
            setNewPassword("");
            input.current.value = "";
            inputRef.current.value = "";
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", res.data.userId);
            props.setstate(false);
            // props.history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      seterror("new password and confirm password doesn't match");
    }
  };
  return (
    <div style={{
      background:'var(--main-bg-dark)',
      position:'absolute',
      width:'100%',
      height:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="col-col-12">
          <div className="card">
            <div className="card__body">
              <div
                style={{
                  width: "100%",
                }}
              >
                <div
                  style={{ width: "97%", display: "flex", margin: "40px 8px" }}
                >
                  <label
                    style={{
                      width: "100px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    User Id:
                  </label>
                  <input
                    ref={inputRef}
                    placeholder="User id or Member id"
                    type="text"
                    onChange={(e) => setOldPassword(e.target.value)}
                    style={{
                      height: "45px",
                      width: "100%",
                      fontSize: "1rem",
                      backgroundColor: "var(--second-bg)",
                      boxShadow: "var(--box-shadow)",
                      borderRadius: "var(--border-radius)",
                      color: "var(--txt-color)",
                    }}
                  />
                </div>
                <div
                  style={{ width: "97%", display: "flex", margin: "25px 8px" }}
                >
                  <label
                    style={{
                      width: "100px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Password:
                  </label>
                  <input
                    ref={input}
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{
                      height: "45px",
                      width: "100%",
                      fontSize: "1rem",
                      backgroundColor: "var(--second-bg)",
                      boxShadow: "var(--box-shadow)",
                      borderRadius: "var(--border-radius)",
                      color: "var(--txt-color)",
                    }}
                  />
                </div>

                <div
                  style={{
                    width: "97%",
                    display: "flex",
                    margin: "15px 8px",
                    justifyContent: "center",
                  }}
                >
                  <button onClick={() => changePassword()} className="submited">
                    Login
                  </button>
                  
                </div>
                <div
                style={{
                  width: "100%",
                  margin: "15px 8px",
                  justifyContent: "center",

                }}
                >
                    Dont have an Account? <span onClick={()=>props.setRegister(true)}>Register Now</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
