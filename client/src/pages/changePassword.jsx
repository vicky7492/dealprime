import React, { useRef, useState } from "react";

import axios from '../Axios-create';

const ChangePassword = (props) => {
  const [OldPassword, setOldPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, seterror] = useState("");
const input=useRef()
  const changePassword = () => {
    let data={
      id:localStorage.getItem('user'),
      OldPassword:OldPassword,
      NewPassword:NewPassword,
      ConfirmPassword:ConfirmPassword
    };
    if (NewPassword === ConfirmPassword) {
      seterror("");
      axios.post('/changePassword',data).then(
        res=>{
          if(res.status===200){
            console.log(props)
            props.history.push('/');
            setOldPassword('');
            setNewPassword('');
            ConfirmPassword('');
            input.current.value="";
            console.log(props)

          }
        }
      ).catch(
        err=>{
          console.log(err)
        }
      )
      // input.current.value=""
    } else {
      seterror("new password and confirm password doesn't match");
    }
  };
  return (
    <div>
      <h2 className="page-header">Change Password</h2>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="col-10">
          <div className="card">
            <div className="card__body">
              <div
                style={{
                  width: "100%",
                }}
              >
                <div
                  style={{ width: "97%", display: "flex", margin: "25px 8px" }}
                >
                  <label
                    style={{
                      width: "200px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Old Password:
                  </label>
                  <input
                  ref={input}
                    text="password"
                    onChange={(e) => setOldPassword(e.target.value)}
                    style={{
                      height: "45px",
                      width: "100%",
                      fontSize: "1rem",
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
                      width: "200px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    New Password:
                  </label>
                  <input
                  ref={input}

                    text="password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{
                      height: "45px",
                      width: "100%",
                      fontSize: "1rem",
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
                      width: "200px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    confirm Password:
                  </label>
                  <input
                  ref={input}

                    text="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{
                      height: "45px",
                      width: "100%",
                      fontSize: "1rem",
                      borderRadius: "var(--border-radius)",
                      color: "var(--txt-color)",
                    }}
                  />
                </div>
                {error ? (
                  <div
                    style={{
                      width: "97%",
                      display: "flex",
                      margin: "25px 8px",
                      justifyContent: "center",
                    }}
                  >
                    {error ? (
                      <span
                        style={{ color: "red", textTransform: "capitalize" }}
                      >
                        {error}
                      </span>
                    ) : null}
                  </div>
                ) : null}
                <div
                  style={{
                    width: "97%",
                    display: "flex",
                    margin: "15px 8px",
                    justifyContent: "center",
                  }}
                >
                  <button onClick={() => changePassword()} className="submited">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
