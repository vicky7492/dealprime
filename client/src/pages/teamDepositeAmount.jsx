import React, { useEffect, useState } from "react";

import Backdrop from "../components/BackDrop/Backdrop";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Table from "../components/table/Table";
import axios from "../Axios-create";

const customerTableHead = [
  "S.No",
  "Member Id",
  "Member Name",
  // "Self Deposit Amount",
  "Team Deposit Amount",
  "Action",
];

const renderHead = (item, index) => (
  <th align="center" key={index}>
    {item}
  </th>
);

const TeamDepositeAmount = () => {
  const [Add, setAdd] = useState(false);
  const [memberId, setmemberId] = useState("");
  const [memberName, setmemberName] = useState("");
  const [TeamDepositeAmount, setTeamDepositeAmount] = useState("");
  const [MOdifyData, setMOdifyData] = useState([]);
  const [Modify, setModify] = useState(false);

  const [customerList, setcustomerList] = useState([
    {
      id: 1,
      teamDepositAmount: "179144353",
      selfDepositAmount: "179144353",
      memberName: "Aript Srivastava : 9 %",
      memberId: "179144353",
    },
    {
      id: 2,
      teamDepositAmount: "179144353",
      selfDepositAmount: "179144353",
      memberName: "	Aript Srivastava : 9 %",
      memberId: "179144353",
    },
    {
      id: 1,
      teamDepositAmount: "179144353",
      selfDepositAmount: "179144353",
      memberName: "	Aript Srivastava : 9 %",
      memberId: "179144353",
    },
    {
      id: 1,
      teamDepositAmount: "179144353",
      selfDepositAmount: "179144353",
      memberName: "	Aript Srivastava : 9 %",
      memberId: "179144353",
    },
  ]);
  let self = 0;
  let Team = 0;
  customerList.map((val, i) => {
    self = self + +val.selfDepositAmount;
    Team = Team + +val.teamDepositAmount;
    return self;
  });
  let getIncomeDetail = () => {
    axios
      .get("/teamDepositeAmount")
      .then((res) => {
        console.log(res.data);
        setcustomerList([...res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const postIncome = () => {
    let data = {
      memberName: memberName,
      memberId: memberId,
      teamDepositAmount: TeamDepositeAmount,
    };

    axios
      .post("/add/teamDepositeAmount", data)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          setAdd(false);
          getIncomeDetail();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };
  const postModify = () => {
    let data = {
      memberName: memberName ? memberName : MOdifyData[0].memberName,
      memberId: memberId ? memberId : MOdifyData[0].memberId,
      teamDepositAmount: TeamDepositeAmount
        ? TeamDepositeAmount
        : MOdifyData[0].teamDepositAmount,
      id: MOdifyData[0]._id,
    };
    axios
      .patch("/update/teamDepositeAmount", data)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          setModify(false);
          getIncomeDetail();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };
  const deleteed = (id) => {
    axios.delete("/delete/teamDepositeAmount/:id").then((res) => {
      if (res.status === 200) {
        getIncomeDetail();
      }
    });
  };
  // useEffect
  useEffect(() => {
    getIncomeDetail();
  }, []);

  const renderBody = (item, index) => (
    <tr key={index}>
      <td align="center">{index + 1}</td>
      <td align="center">{item.memberId}</td>
      <td align="center">{item.memberName}</td>
      {/* <td align="center">{item.selfDepositAmount}</td> */}
      <td align="center">{item.teamDepositAmount}</td>

      <td align="center">
        <div>
          <ChangeCircleIcon
            onClick={() => {
              setModify(true);
              setMOdifyData([item]);
            }}
            style={{ cursor: "pointer", marginRight: "4%" }}
          />
          <RemoveCircleIcon
            onClick={() => deleteed(item._id)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </td>
    </tr>
  );
  const modal = () => {
    return (
      <Backdrop>
        <div className="card">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "550px",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              height: "fit-content",
            }}
          >
            <div
              style={{ width: "500px", display: "flex", margin: "15px 8px" }}
            >
              <label
                style={{
                  width: "170px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Member Id :
              </label>
              <input
                type="text"
                placeholder="Member Id "
                onChange={(e) => setmemberId(e.target.value)}
                style={{
                  height: "40px",
                  width: "100%",
                  fontSize: "1rem",
                  borderRadius: "var(--border-radius)",
                  color: "var(--txt-color)",
                }}
              />
            </div>
            <div
              style={{ width: "500px", display: "flex", margin: "15px 8px" }}
            >
              <label
                style={{
                  width: "170px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Member Name:
              </label>
              <input
                type="text"
                placeholder="Member Name"
                onChange={(e) => setmemberName(e.target.value)}
                style={{
                  height: "40px",
                  width: "100%",
                  fontSize: "1rem",
                  borderRadius: "var(--border-radius)",
                  color: "var(--txt-color)",
                }}
              />
            </div>
            <div
              style={{ width: "500px", display: "flex", margin: "15px 8px" }}
            >
              <label
                style={{
                  width: "170px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Team Deposite:
              </label>
              <input
                type="text"
                placeholder="Team Deposite Amount"
                onChange={(e) => setTeamDepositeAmount(e.target.value)}
                style={{
                  height: "40px",
                  width: "100%",
                  fontSize: "1rem",
                  borderRadius: "var(--border-radius)",
                  color: "var(--txt-color)",
                }}
              />
            </div>
            <div
              style={{
                width: "85%",
                marginTop: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => setAdd(false)}
                style={{
                  background: "red",
                  padding: "10px 25px",
                  fontSize: 16,
                  margin: "0px 14px",
                  borderRadius: 10,
                  textTransform: "capitalize",
                }}
              >
                cancel
              </button>
              <button
                onClick={() => postIncome()}
                style={{
                  background: "#2ecc71",
                  padding: "10px 25px",
                  fontSize: 16,
                  borderRadius: 10,
                  textTransform: "capitalize",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Backdrop>
    );
  };
  const modalModify = () => {
    return (
      <Backdrop>
        <div className="card">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "550px",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              height: "fit-content",
            }}
          >
            <div
              style={{ width: "500px", display: "flex", margin: "15px 8px" }}
            >
              <label
                style={{
                  width: "170px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Member Id :
              </label>
              <input
                type="text"
                defaultValue={MOdifyData[0].memberId}
                placeholder="Member Id "
                onChange={(e) => setmemberId(e.target.value)}
                style={{
                  height: "40px",
                  width: "100%",
                  fontSize: "1rem",
                  borderRadius: "var(--border-radius)",
                  color: "var(--txt-color)",
                }}
              />
            </div>
            <div
              style={{ width: "500px", display: "flex", margin: "15px 8px" }}
            >
              <label
                style={{
                  width: "170px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Member Name:
              </label>
              <input
                type="text"
                placeholder="Member Name"
                defaultValue={MOdifyData[0].memberName}
                onChange={(e) => setmemberName(e.target.value)}
                style={{
                  height: "40px",
                  width: "100%",
                  fontSize: "1rem",
                  borderRadius: "var(--border-radius)",
                  color: "var(--txt-color)",
                }}
              />
            </div>
            <div
              style={{ width: "500px", display: "flex", margin: "15px 8px" }}
            >
              <label
                style={{
                  width: "170px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Team Deposite:
              </label>
              <input
                type="text"
                placeholder="Team Deposite Amount"
                defaultValue={MOdifyData[0].teamDepositAmount}
                onChange={(e) => setTeamDepositeAmount(e.target.value)}
                style={{
                  height: "40px",
                  width: "100%",
                  fontSize: "1rem",
                  borderRadius: "var(--border-radius)",
                  color: "var(--txt-color)",
                }}
              />
            </div>
            <div
              style={{
                width: "85%",
                marginTop: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => setModify(false)}
                style={{
                  background: "red",
                  padding: "10px 25px",
                  fontSize: 16,
                  margin: "0px 14px",
                  borderRadius: 10,
                  textTransform: "capitalize",
                }}
              >
                cancel
              </button>
              <button
                onClick={() => postModify()}
                style={{
                  background: "#2ecc71",
                  padding: "10px 25px",
                  fontSize: 16,
                  borderRadius: 10,
                  textTransform: "capitalize",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Backdrop>
    );
  };
  return (
    <div>
      {Add ? modal() : null}
      {Modify ? modalModify() : null}
      <h2 className="page-header">Team Deposit Amount </h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "90%",
                }}
              >
                <div
                  style={{
                    flex: "60%",
                    fontSize: "18px",
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "13%",
                    alignItems: "flex-end",
                  }}
                >
                  KARAN KUMAR {
                    localStorage.getItem('user')
                  }
                </div>
                <div
                  className="AddBtn"
                  style={{
                    marginLeft: "2%",
                    cursor: "pointer",
                    padding: "8px 15px",
                    fontSize: 20,
                    borderRadius: "5px",
                    border: "1px solid var(--txt-white)",
                  }}
                  onClick={() => setAdd(true)}
                >
                  Add Deposite
                </div>
              </div>
              <div
                className="row"
                style={{
                  fontSize: "18px",
                  marginTop: "4px",
                }}
              >
                Team : INR.{Team} :: Total Deposit : INR.{Team}
              </div>
            </div>
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customerList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDepositeAmount;
