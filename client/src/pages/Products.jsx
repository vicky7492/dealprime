import React, { Component } from "react";
import { Tree, TreeNode } from "react-organizational-chart";

import { Alert } from "../components/Alert";
import Images from "../assets/images/greenuser.png";
import axios from "../Axios-create";
import { withAlert } from "react-alert";

// const [state, setstate] = useState([
//     {
//         title:'kisan1',
//         teams:[
//             {title:'kisan2',teams:[
//             {title:'kisan3',teams:[
//             {title:'kisan4',teams:[
//             {title:'kisan5'},

//             ]},
//             {title:'kisan4'},
//             {title:'kisan4'},
//             {title:'kisan4'},
//             {title:'kisan4',teams:[
//                 {title:'kisan5'},

//                 ]},
//             ]},
//             {title:'kisan3',teams:[
//                 {title:'kisan2',teams:[
//                     {title:'kisan3',teams:[
//                     {title:'kisan4',teams:[
//                     {title:'kisan5'},

//                     ]},
//                     {title:'kisan4'},
//                     {title:'kisan4'},
//                     {title:'kisan4'},
//                     {title:'kisan4',teams:[
//                         {title:'kisan5'},

//                         ]},
//                     ]},
//                     {title:'kisan3'},
//                     {title:'kisan3'},
//                     {title:'kisan3'},
//                     {title:'kisan3'},

//                     ]},
//             ]},
//             {title:'kisan3'},
//             {title:'kisan3'},
//             {title:'kisan3'},

//             ]},
//             {title:'kisan'},
//             {title:'kisan',teams:[
//                 {title:'kisan2',teams:[
//                     {title:'kisan3',teams:[
//                     {title:'kisan4',teams:[
//                     {title:'kisan5'},

//                     ]},
//                     {title:'kisan4'},
//                     {title:'kisan4'},
//                     {title:'kisan4'},
//                     {title:'kisan4',teams:[
//                         {title:'kisan5'},

//                         ]},
//                     ]},
//                     {title:'kisan3'},
//                     {title:'kisan3'},
//                     {title:'kisan3'},
//                     {title:'kisan3'},

//                     ]},
//             ]},
//             {title:'kisan'},
//             {title:'kisan'},
//             {title:'kisan'},
//             {title:'kisan'},
//             {title:'kisan'},

//         ]
//     },
//     {title:'kisan2',teams:[
//         {title:'kisan3',teams:[
//         {title:'kisan4',teams:[
//         {title:'kisan5'},

//         ]},
//         {title:'kisan4'},
//         {title:'kisan4'},
//         {title:'kisan4'},
//         {title:'kisan4',teams:[
//             {title:'kisan5'},

//             ]},
//         ]},
//         {title:'kisan3'},
//         {title:'kisan3'},
//         {title:'kisan3'},
//         {title:'kisan3'},

//         ]},
// ])

// useEffect

// console.log(customerList)
// const mapping=(val,i)=>{
// return val.teams.map((val,i)=>{
//     console.log(val)
//     return
// })
// }

// customerList.map((val,i)=>{
// if(val.memeberId==='2222'){
//     let data={
//         title:val.membername,
//         memeberId:val.memeberId
//     }
//     data.index=i;
//     if(val.teams.length>-1){
//         data.teams=val.teams;
//     }
//     console.log(data)
//     dataed.push(data);
//     console.log(val.teams.length)
// }
// });
// console.log(
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      mapData: [],
      selfDeposite: [],
    };
    this.lgetIncomeDetail = this.lgetIncomeDetail.bind(this);
  }
  componentDidMount() {
    this.lgetIncomeDetail();
    this.getSelfDeposite();
  }
  lgetIncomeDetail = () => {
    axios
      .get("/users")
      .then((res) => {
        this.setState({
          ...this.state,
          datas: [...res.data.data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getSelfDeposite = () => {
    axios
      .get("/selfDepositeAmount")
      .then((res) => {
        console.log(res.data);
        this.setState({
          ...this.state,
          selfDeposite: [...res.data.data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  data = (val) => {
    return val.teams.map((val, i) => {
      return (
        <TreeNode
          key={i}
          label={
            <div className="StyledNode" 
            
            onMouseEnter={() => {
                alert.show(
                  <div
                    style={{
                      padding: "10px",
                      textTransform: "none",
                      width: "200px",
                      background: "red",
                    }}
                  >
                     <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <p style={{ padding: "4px" }}>
                      Name:{val.memeberId}
                    </p>
                    <p style={{ padding: "4px" }}>
                      id:{val.membername}
                    </p>
                    <p style={{ padding: "4px" }}>
                      current Level:{this.letLevel(val.memeberId)}%
                    </p>
                    <p style={{ padding: "4px" }}>
                      {" "}
                      self Deposite:{this.letself(val.memeberId)}
                    </p>
                  </div>
                  </div>
                );
              }}
            >
              <img
                src={Images}
                alt={"Main"}
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
              <p>{val.memeberId}</p>
              <p> {val.membername}</p>
              <p>level:{this.letLevel(val.memeberId)}</p>
            </div>
          }
        >
          {val.teams ? this.data(val) : null}
        </TreeNode>
      );
    });
  };
  letLevel = (mId) => {
    let datas = this.state.selfDeposite;
    let total = 0;
    let singular = 0;
    let vals = datas.map((val, i) => {
      console.log(val.postedId, mId);
      total = total + +val.depositAmount;
      if (val.postedId === mId) {
        singular = singular + +val.depositAmount;
      }
      return total;
    });
    //   for level
    let pre = (singular / total) * 100;
    console.log(datas, total, singular, +pre.toFixed(2));
    return pre.toFixed(2);
  };
   letself = (mId) => {
    let datas = this.state.selfDeposite;
    let total = 0;
    let singular = 0;
    let vals = datas.map((val, i) => {
      console.log(val.postedId, mId);
      total = total + +val.depositAmount;
      if (val.postedId === mId) {
        singular = singular + +val.depositAmount;
      }
      return total;
    });
    //   for level
    let pre = (singular / total) * 100;
    console.log(datas, total, singular, +pre.toFixed(2));
    return singular;
  };
  render() {
    const alert = this.props.alert;
    console.log(alert);
    const letLevel = (mId) => {
      let datas = this.state.selfDeposite;
      let total = 0;
      let singular = 0;
      let vals = datas.map((val, i) => {
        console.log(val.postedId, mId);
        total = total + +val.depositAmount;
        if (val.postedId === mId) {
          singular = singular + +val.depositAmount;
        }
        return total;
      });
      //   for level
      let pre = (singular / total) * 100;
      console.log(datas, total, singular, +pre.toFixed(2));
      return pre.toFixed(2);
    };
    const letself = (mId) => {
      let datas = this.state.selfDeposite;
      let total = 0;
      let singular = 0;
      let vals = datas.map((val, i) => {
        console.log(val.postedId, mId);
        total = total + +val.depositAmount;
        if (val.postedId === mId) {
          singular = singular + +val.depositAmount;
        }
        return total;
      });
      //   for level
      let pre = (singular / total) * 100;
      console.log(datas, total, singular, +pre.toFixed(2));
      return singular;
    };
    return (
      <div
        className="Genelogy"
        style={{
          overflow: "scroll",
          width: "100%",
        }}
      >
        {/* {dateded} */}
        <Tree
          lineWidth={"4px"}
          lineColor={"green"}
          lineBorderRadius={"10px"}
          label={
            <div
              onMouseEnter={() => {
                let data = (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {this.state.datas.map((val, i) => {
                      if (val.memeberId === localStorage.getItem("user")) {
                        let data = (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              textAlign: "center",
                            }}
                          >
                            <p style={{ padding: "4px" }}>
                              Name:{val.memeberId}
                            </p>
                            <p style={{ padding: "4px" }}>
                              id:{val.membername}
                            </p>
                            <p style={{ padding: "4px" }}>
                              current Level:{letLevel(val.memeberId)}%
                            </p>
                            <p style={{ padding: "4px" }}>
                              {" "}
                              self Deposite:{letself(val.memeberId)}
                            </p>
                          </div>
                        );
                        return data;
                      } else {
                        return null;
                      }
                    })}
                  </div>
                );
                alert.show(
                  <div
                    style={{
                      padding: "10px",
                      textTransform: "none",
                      width: "200px",
                      background: "red",
                    }}
                  >
                    {data}
                  </div>
                );
              }}
              className="StyledNode"
              style={{
                display: "inline-flex",
              }}
            >
              <img
                src={Images}
                alt={"Main"}
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
              {this.state.datas.map((val, i) => {
                if (val.memeberId === localStorage.getItem("user")) {
                  let data = (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <p>{val.memeberId}</p>
                      <p>{val.membername}</p>
                      <p> Level:{letLevel(val.memeberId)}</p>
                    </div>
                  );
                  return data;
                } else {
                  return null;
                }
              })}
            </div>
          }
        >
          {this.state.datas.map((val, i) => {
            if (val.parentId === localStorage.getItem("user")) {
              console.log(val);
              return (
                <TreeNode
                  key={i}
                  label={
                    <div
                      onMouseEnter={() => {
                        alert.show(
                          <div
                            style={{
                              padding: "10px",
                              textTransform: "none",
                              width: "200px",
                              background: "red",
                            }}
                          >
                             <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              textAlign: "center",
                            }}
                          >
                            <p style={{ padding: "4px" }}>
                              Name:{val.memeberId}
                            </p>
                            <p style={{ padding: "4px" }}>
                              id:{val.membername}
                            </p>
                            <p style={{ padding: "4px" }}>
                              current Level:{letLevel(val.memeberId)}%
                            </p>
                            <p style={{ padding: "4px" }}>
                              {" "}
                              self Deposite:{letself(val.memeberId)}
                            </p>
                          </div>
                          </div>
                        );
                      }}
                      className="StyledNode"
                    >
                      <img
                        src={Images}
                        alt={"Main"}
                        style={{
                          height: "50px",
                          width: "50px",
                        }}
                      />
                      <p>{val.memeberId}</p>
                      <p> {val.membername}</p>
                      <p>level:{letLevel(val.memeberId)}</p>
                    </div>
                  }
                >
                  {val.teams ? this.data(val) : null}
                </TreeNode>
              );
            } else {
              return null;
            }
          })}
        </Tree>
      </div>
    );
  }
}

export default withAlert()(Products);
