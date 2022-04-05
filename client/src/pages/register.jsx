import "./changeProfile.css";

import React, { useEffect, useState } from "react";

import axios from "../Axios-create";

const Register = (props) => {
  const [membername, setMembername] = useState("");
  const [password, setPassword] = useState("password");
  const [mobilenumber, setMobilenumber] = useState("mobilenumber");
  const [email, setEmail] = useState("email");
  const [gender, setGender] = useState("gender");
  const [joiningdate, setJoiningDate] = useState("");
  const [district, setDistrict] = useState("district");
  const [state, setState] = useState("state");
  const [pincode, setPincode] = useState("pincode");
  const [address, setAddress] = useState("address");
  const [nominename, setNominename] = useState("nominename");
  const [relation, setRelation] = useState("relation");
  const [bankname, setBankname] = useState("bankname");
  const [bankbranch, setBankbranch] = useState("bankbranch");
  const [accountnumber, setAccountnumber] = useState("accountnumber");
  const [ifsccode, setIfsccode] = useState("ifsccode");
  const [pannumber, setPannumber] = useState("pannumber");
  const [adharnumber, setAdharnumber] = useState("adharnumber");
  const [sponceredid, setSponceredId] = useState("sponceredid");

  const Submit = () => {
    let data = {
      membername: membername,
      password: password,
      mobilenumber: mobilenumber,
      email: email,
      gender: gender,
      joiningdate: joiningdate,
      district: district,
      state: state,
      pincode: pincode,
      address: address,
      nominename: nominename,
      relation: relation,
      bankname: bankname,
      bankbranch: bankbranch,
      accountnumber: accountnumber,
      ifsccode: ifsccode,
      pannumber: pannumber,
      adharnumber: adharnumber,
    };
    axios
      .post("/register", data)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          props.setRegister(false);
          alert("Your user id/ login id is:" + res.data.memeberId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      style={{
        background: "var(--main-bg-dark)",
        width: "100%",
        overflow: "hidden",
        position: "absolute",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="col-11">
          <div className="card">
            <div className="card__body">
              <div className="FormCard_Row1">
                <div className="FormControl">
                  <label>applicant name</label>
                  <input
                    type="text"
                    placeholder="name"
                    defaultValue={membername}
                    className="Form_Input"
                    onChange={(e) => setMembername(e.target.value)}
                    name={membername}
                  />
                </div>
                <div className="FormControl">
                  <label>password</label>
                  <input
                    type="password"
                    placeholder="password "
                    className="Form_Input"
                    onChange={(e) => setPassword(e.target.value)}
                    name={password}
                  />
                </div>
                <div className="FormControl">
                  <label>mobile number</label>
                  <input
                    type="text"
                    placeholder="mobile number "
                    className="Form_Input"
                    onChange={(e) => setMobilenumber(e.target.value)}
                    name={mobilenumber}
                  />
                </div>
                <div className="FormControl">
                  <label>email</label>
                  <input
                    type="text"
                    placeholder="email"
                    className="Form_Input"
                    onChange={(e) => setEmail(e.target.value)}
                    name={email}
                  />
                </div>
                <div className="FormControl">
                  <label>gender</label>
                  <input
                    type="text"
                    placeholder="gender"
                    className="Form_Input"
                    onChange={(e) => setGender(e.target.value)}
                    name={gender}
                  />
                </div>
                <div className="FormControl">
                  <label>joining date</label>
                  <input
                    type="date"
                    placeholder="joining date"
                    className="Form_Input"
                    onChange={(e) => setJoiningDate(e.target.value)}
                    name={joiningdate}
                  />
                </div>
                <div className="FormControl">
                  <label>district</label>
                  <input
                    type="text"
                    placeholder="district"
                    className="Form_Input"
                    onChange={(e) => setDistrict(e.target.value)}
                    name={district}
                  />
                </div>
                <div className="FormControl">
                  <label>state</label>
                  <input
                    type="text"
                    placeholder="state"
                    className="Form_Input"
                    onChange={(e) => setState(e.target.value)}
                    name={state}
                  />
                </div>
                <div className="FormControl">
                  <label>pin code</label>
                  <input
                    type="text"
                    placeholder="pin code"
                    className="Form_Input"
                    onChange={(e) => setPincode(e.target.value)}
                    name={pincode}
                  />
                </div>

                <div className="FormControl">
                  <label>address</label>
                  <input
                    type="text"
                    placeholder="address"
                    className="Form_Input"
                    onChange={(e) => setAddress(e.target.value)}
                    name={address}
                  />
                </div>
                <div className="FormControl">
                  <label>nomine name</label>
                  <input
                    type="text"
                    placeholder="nomine name"
                    className="Form_Input"
                    onChange={(e) => setNominename(e.target.value)}
                    name={nominename}
                  />
                </div>
                <div className="FormControl">
                  <label>relation</label>
                  <input
                    type="text"
                    placeholder="relation"
                    className="Form_Input"
                    onChange={(e) => setRelation(e.target.value)}
                    name={relation}
                  />
                </div>
                <div className="FormControl">
                  <label>bank name</label>
                  <input
                    type="text"
                    placeholder="bank name"
                    className="Form_Input"
                    onChange={(e) => setBankname(e.target.value)}
                    name={bankname}
                  />
                </div>
                <div className="FormControl">
                  <label>bank branch</label>
                  <input
                    type="text"
                    placeholder="bank branch"
                    className="Form_Input"
                    onChange={(e) => setBankbranch(e.target.value)}
                    name={bankbranch}
                  />
                </div>
                <div className="FormControl">
                  <label>Account number</label>
                  <input
                    type="text"
                    placeholder="Account number"
                    className="Form_Input"
                    onChange={(e) => setAccountnumber(e.target.value)}
                    name={accountnumber}
                  />
                </div>
                <div className="FormControl">
                  <label>i.f.s.c code</label>
                  <input
                    type="text"
                    placeholder="i.f.s.c code"
                    className="Form_Input"
                    onChange={(e) => setIfsccode(e.target.value)}
                    name={ifsccode}
                  />
                </div>
                <div className="FormControl">
                  <label>pan number</label>
                  <input
                    type="text"
                    placeholder="pan number"
                    className="Form_Input"
                    onChange={(e) => setPannumber(e.target.value)}
                    name={pannumber}
                  />
                </div>
                <div className="FormControl">
                  <label>adhar number</label>
                  <input
                    type="text"
                    placeholder="adhar number"
                    className="Form_Input"
                    onChange={(e) => setAdharnumber(e.target.value)}
                    name={adharnumber}
                  />
                </div>

                <div className="FormControl">
                  <label> Sponcered id</label>
                  <input
                    type="text"
                    placeholder="sponcered id"
                    className="Form_Input"
                    onChange={(e) => setSponceredId(e.target.value)}
                    name={sponceredid}
                  />
                </div>
              </div>
              <div className="FormCard_Row2">
                <div className="Form_Submit_Button">
                  <button className="green-color" onClick={() => Submit()}>
                    {" "}
                    submit
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                margin: "15px 8px",
                justifyContent: "center",
              }}
            >
              Already have an Account?{" "}
              <span
                style={{
                  cursor: "pointer",
                }}
                onClick={() => props.setRegister(false)}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
