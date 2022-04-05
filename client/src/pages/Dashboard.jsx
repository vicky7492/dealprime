import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import StatusCard from "../components/status-card/StatusCard";
import Table from "../components/table/Table";
import axios from "../Axios-create";
import statusCards from "../assets/JsonData/status-card-data.json";
import { useSelector } from "react-redux";

// import Chart from 'react-apexcharts'

// const chartOptions = {
//     series: [{
//         name: 'Online Customers',
//         data: [40,70,20,90,36,80,30,91,60]
//     }, {
//         name: 'Store Customers',
//         data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
//     }],
//     options: {
//         color: ['#6ab04c', '#2980b9'],
//         chart: {
//             background: 'transparent'
//         },
//         dataLabels: {
//             enabled: false
//         },
//         stroke: {
//             curve: 'smooth'
//         },
//         xaxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
//         },
//         legend: {
//             position: 'top'
//         },
//         grid: {
//             show: false
//         }
//     }
// }

const topCustomers = {
  head: ["S.No", "Date", "News Title", "Desc."],
  body: [
    {
      username: "john doe",
      date: "490",
      newsTitle: "about payment",
      desc: "all payment accepted with online transfer /cheque since 1st january 2021 the cash is not accepted",
    },
    {
      username: "frank iva",
      date: "250",
      newsTitle: "about payment",
      desc: "all payment accepted with online transfer /cheque since 1st january 2021 the cash is not accepted",
    },
    {
      username: "anthony baker",
      date: "120",
      newsTitle: "about payment",
      desc: "all payment accepted with online transfer /cheque since 1st january 2021 the cash is not accepted",
    },
    {
      username: "frank iva",
      date: "110",
      newsTitle: "about payment",
      desc: "all payment accepted with online transfer /cheque since 1st january 2021 the cash is not accepted",
    },
    {
      username: "anthony baker",
      date: "80",
      newsTitle: "about payment",
      desc: "all payment accepted with online transfer /cheque since 1st january 2021 the cash is not accepted",
    },
  ],
};

const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCusomerBody = (item, index) => {
  return <tr key={index}>
    <td>{index + 1}</td>
    <td>{item.date}</td>
    <td>{item.newTitle}</td>
    <td>{item.desc}</td>
  </tr>
};

const latestOrders = {
  header: ["S.No", "Member Id", "Member Name", "Parent Id", "Joining Date"],
  body: [
    {
      memberId: "#OD1711",
      memberName: "john doe",
      date: "17 Jun 2021",
      parentId: "#OD1711",
    },
    {
      memberId: "#OD1712",
      memberName: "frank iva",
      date: "1 Jun 2021",
      parentId: "#OD1711",
    },
    {
      memberId: "#OD1713",
      memberName: "anthony baker",
      date: "27 Jun 2021",
      parentId: "#OD1711",
    },
    {
      memberId: "#OD1712",
      memberName: "frank iva",
      date: "1 Jun 2021",
      parentId: "#OD1711",
    },
    {
      memberId: "#OD1713",
      memberName: "anthony baker",
      date: "27 Jun 2021",
      parentId: "#OD1711",
    },
  ],
};

// const orderStatus = {
//     "shipping": "primary",
//     "pending": "warning",
//     "paid": "success",
//     "refund": "danger"
// }

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => {
  // console.log(item)
  if(item.parentId===localStorage.getItem('user')){
  return <tr key={index}>
    <td>{index }</td>
    <td>{item.memeberId}</td>
    <td>{item.membername}</td>
    <td>{item.parentId}</td>
    <td>{item.joiningdate}</td>
  </tr>
  }
};

const Dashboard = () => {
  const [customerList, setCustomerList] = useState([]);
  const [Self, setSelf] = useState([]);
  const [TeamData, setTeamData] = useState([]);
  const [teamDetail, setTeamDetail] = useState([]);


  const [state, setstate] = useState([
    {
      count: "1,995",
      title: "Total Direct Team",
    },
    {
      count: "2,001",
      title: "Total No of Member",
    },
    // {
    //   count: "$2,632",
    //   title: "Percentage Level",
    // },
    {
      count: "1,711",
      title: "Total Payout",
    },
  ]);
  let getIncomeDetail = () => {
    axios
      .get("/incomeDetail",{
        headers:{
          'Authorization':localStorage.getItem('token')?localStorage.getItem('token'):'none'
        }
      })
      .then((res) => {
        setCustomerList([...res.data.data]);
        // console.log(customerList);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let Selfed = () => {
    axios
      .get("/selfDepositeAmount")
      .then((res) => {
        // console.log(res.data);
        setSelf([...res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let TeamAmount = () => {
    axios
      .get("/teamDepositeAmount")
      .then((res) => {
        setTeamData([...res.data.data]);
        console.log('teeeeeamdep',teamData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let getTeamDetail=()=>{
    axios.get('/users').then(res=>{
      // console.log(res.data);
      setTeamDetail([...res.data.data])
    }).catch(err=>{
      console.log(err)
    })
  }
  // useEffect
  useEffect(() => {
    getIncomeDetail();
    Selfed();
    TeamAmount();
    getTeamDetail();
  }, []);
  let data = 0;
  customerList.map((val, i) => {
    if(val.postedId===localStorage.getItem('user')){  
      console.log("customerlist", val)
      data = data + +val.payAmt;
   }
     return data;
   });




  let self = 0;
  Self.map(( val, i) => {
    if(val.postedId===localStorage.getItem('user')){  
      // console.log("self",val)
    self = self + +val.depositAmount;
  }
    return self;
  });
  let teamNo=0;
  teamDetail.map((val,i)=>{
    if(val.parentId===localStorage.getItem('user')){
      teamNo=teamNo+1;
    }
    return teamNo;
  })
  let teamData = 0;
  TeamData.map((val, i) => {
    teamData = teamData + +val.teamDepositAmount;
    return teamData;
  });
  // let teamData = 0;
  // TeamData.map((val, i) => {
  //   if(val.memberId===localStorage.getItem('user')){
  //   teamData = teamData + +val.teamDepositAmount;
  //   }
  //   return teamData;
  // });
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div
            className="card__header"
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: 10,
              marginBottom: 15,
            }}
          >
            {/* <NewspaperIcon /> */}
            <h3
              style={{
                marginLeft: 5,
              }}
            >
              {/* Latest News */}
            </h3>
          </div>
          <div
            className="row"
            style={{
              marginTop: 40,
            }}
          >
            {state.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  // icon={item.icon}
                  count={item.title === "Total Payout" ? data:
                  item.title === "Total Direct Team"?teamNo
                  : 0}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div
            className="card__header"
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: 10,
              marginBottom: 15,
            }}
          >
            <NewspaperIcon />
            <h3
              style={{
                marginLeft: 5,
              }}
            >
              Business Status
            </h3>
          </div>
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  // icon={item.icon}
                  count={
                    item.title === "self"
                      ? self
                      : item.title === "team"
                      ? teamData
                      : self + teamData
                  }
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <div className="col-6">
                    <div className="card full-height">
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div> */}
        <div className="col-6">
          <div className="card">
            <div
              className="card__header"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <NewspaperIcon />
              <h3
                style={{
                  marginLeft: 5,
                }}
              >
                Latest News
              </h3>
            </div>
            <div className="card__body">
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCusomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCusomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div
              className="card__header"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <LocalAtmIcon />
              <h3 style={{ marginLeft: "5px" }}> Direct Team Detail </h3>
            </div>
            <div className="card__body">
              <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={teamDetail}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
