import React, { useEffect, useState } from "react";

import Backdrop from "../components/BackDrop/Backdrop";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Table from "../components/table/Table";
import axios from "../Axios-create";

const customerTableHead = ["S.No", "Deposit Amount", "Deposit Date", "Action"];

const renderHead = (item, index) => (
  <th align="center" key={index}>
    {item}
  </th>
);

const SelfDepositeAmount = () => {
  const [customerList, setcustomerList] = useState([]);
  const [Add, setAdd] = useState(false);
  const [depositAmount, setdepositAmount] = useState("");
  const [depositDate, setdepositDate] = useState("");
  const [MOdifyData, setMOdifyData] = useState([]);
  const [Modify, setModify] = useState(false);

  useEffect(() => {
    getIncomeDetail();
  }, []);

  let getIncomeDetail = () => {
    axios
      .get("/selfDepositeAmount")
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
      depositDate: depositDate,
      depositAmount: depositAmount,
      postedId:localStorage.getItem('user')
    };
    axios
      .post("/add/selfDepositeAmount", data)
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
      depositDate: depositDate ? depositDate : MOdifyData[0].depositDate,
      depositAmount: depositAmount
        ? depositAmount
        : MOdifyData[0].depositAmount,
      id: MOdifyData[0]._id,
      postedId: MOdifyData[0].postedId,
    };
    axios
      .patch("/update/selfDepositeAmount", data)
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
  const modal = () => {
    return (
      <Backdrop>
        <div className="card">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "500px",
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
                  width: "130px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Deposite Date:
              </label>
              <input
                type="date"
                onChange={(e) => setdepositDate(e.target.value)}
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
                  width: "130px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Deposite Amount:
              </label>
              <input
                type="text"
                placeholder="Deposite Amount"
                onChange={(e) => setdepositAmount(e.target.value)}
                style={{
                  height: "40px",
                  width: "100%",
                  fontSize: "1rem",
                  borderRadius: "var(--border-radius)",
                  color: "var(--txt-color)",
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              onClick={() => setAdd(false)}
              style={{
                background: "red",
                padding: "10px 20px",
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
                padding: "10px 20px",
                fontSize: 16,
                borderRadius: 10,
                textTransform: "capitalize",
              }}
            >
              Submit
            </button>
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
              width: "500px",
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
                  width: "130px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Deposite Date:
              </label>
              <input
                type="date"
                defaultValue={MOdifyData[0].depositDate}
                onChange={(e) => setdepositDate(e.target.value)}
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
                  width: "130px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Deposite Amount:
              </label>
              <input
                type="text"
                defaultValue={MOdifyData[0].depositAmount}
                placeholder="Deposite Amount"
                onChange={(e) => setdepositAmount(e.target.value)}
                style={{
                  height: "40px",
                  width: "100%",
                  fontSize: "1rem",
                  borderRadius: "var(--border-radius)",
                  color: "var(--txt-color)",
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              onClick={() => setModify(false)}
              style={{
                background: "red",
                padding: "10px 20px",
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
                padding: "10px 20px",
                fontSize: 16,
                borderRadius: 10,
                textTransform: "capitalize",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </Backdrop>
    );
  };
  const deleteed = (id) => {
    axios.delete(`/delete/selfDepositeAmount/${id}`).then((res) => {
      if (res.status === 200) {
        getIncomeDetail();
      }
    });
  };
  const renderBody = (item, index) => {
    if(item.postedId===localStorage.getItem('user')){
    return <tr key={index}>
      <td align="center">{index + 1}</td>
      <td align="center">{item.depositAmount}</td>
      <td align="center">{item.depositDate}</td>
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
    }
  };
  return (
    <div>
      {Add ? modal() : null}
      {Modify ? modalModify() : null}
      <h2 className="page-header">Self Deposit Amount</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div
              className="col-12"
              style={{
                display: "flex",
                fontSize: "20px",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <div
                className="AddBtn"
                style={{
                  marginLeft: "2%",
                  cursor: "pointer",
                  padding: "10px 20px",
                  fontSize: 20,
                  borderRadius: "5px",
                  border: "1px solid var(--txt-white)",
                }}
                onClick={() => setAdd(true)}
              >
                Add
              </div>
            </div>

            <div className="card__body">
              <Table
                // limit="10"
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

export default SelfDepositeAmount;
