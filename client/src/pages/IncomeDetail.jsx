import React, { useState } from "react";

import  Backdrop  from "../components/BackDrop/Backdrop";
import Table from "../components/table/Table";
import axios from '../Axios-create';
import { useEffect } from "react";

const customerTableHead = [
  "",
  "Payment Date",
  "Self Deposit",
  "Team Deposit",
  "Total Amt.",
  "TDS (5%)",
  "Processsing (5%)",
  "Pay Amt.",
  "View Detail",
];

const renderHead = (item, index) => (
  <th align="center" key={index}>
    {item}
  </th>
);



const IncomeDetail = () => {
  const [customerList, setcustomerList] = useState([]);
  const [Add, setAdd] = useState(false);
  const [PaymentDate, setPaymentDate] = useState('');
  const [selfDeposite, setselfDeposite] = useState('');
  const [teamDeposite, setteamDeposite] = useState('');
  const [TDS, setTDS] = useState('');
  const [Processing, setProcessing] = useState('');
  const [TotalAmount, setTotalAmount] = useState();
  const [PayAmount, setPayAmount] = useState('');
  const [Detail, setDetail] = useState('');

  const abc = (e) => {
    // console.log("eeeeeee", e)
    // console.log('pay', TDS)
    let a = TDS * e / 100;
    setPayAmount(a);
    // console.log('pay', PayAmount, a)
  }

  const cvb = (e) => {
    // let e.target.value;
    setteamDeposite(e.target.value);
    let b = selfDeposite + teamDeposite;
    setTotalAmount(b);
  }

  const cvbn = (e) => {
    setselfDeposite(e.target.value);
    let b = selfDeposite + teamDeposite;
    setTotalAmount(b);
  }


//  let self = document.getElementById('self');
//  let team = document.getElementById('team');

//  setTotalAmount = self + team;
//  setTotalAmount = selfDeposite + teamDeposite;

  let data = 0;
 customerList.map((val, i) => {
   if(val.postedId===localStorage.getItem('user')){

     data = data + +val.payAmt;
   }
    return data;
  });
  let getIncomeDetail=()=>{
    axios.get('/incomeDetail').then(res=>{
      console.log(res.data);
      setcustomerList([...res.data.data])
    }).catch(err=>{
      console.log(err)
    })
  }
  // useEffect
  useEffect(() => {
    getIncomeDetail();
  },[])
  console.log(customerList)
  const renderBody = (item, index) => {
    // console.log("server", item.postedId)
    // console.log("local", localStorage.getItem('user'))

    if(item.postedId===localStorage.getItem('user')){

    console.log(item)
    return <tr key={index}>
      <td align="center">{index + 1}</td>
      <td align="center">{item.paymentDate}</td>
      <td align="center">{item.selfDeposite}</td>
      <td align="center">{item.teamDeposite}</td>
      <td align="center">{item.totalAmt}</td>
      <td align="center">{item.tds}</td>
      <td align="center">{item.procesing}</td>
      <td align="center">{item.payAmt}</td>
      <td align="center">{item.detail}</td>
    </tr>
    }
  };
  const postIncome=()=>{
    let data={
      postedId:localStorage.getItem('user'),
      paymentDate:PaymentDate,
      selfDeposite:selfDeposite,
      teamDeposite:teamDeposite,
      totalAmt:TotalAmount,
      tds:TDS,
      procesing:Processing,
      payAmt:PayAmount,
      detail:Detail
    }

    axios.post('/add/incomeDetail',data).then(res=>{
      console.log(res.data)
      if(res.status===200){
        setAdd(false);
        getIncomeDetail();
      }
    }).catch(err=>{
      console.log(err)
    })
    console.log(data)
  }
  const modal=()=>{
    return <Backdrop>
      <div className='card'>
      <div  style={{
        display:'flex',
        flexDirection:'row',
        width:'650px',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
        height:'fit-content'
      }}>
      <div style={{width:'300px',display:'flex', margin:'10px 8px'}}>
        <label style={{width:'140px',display:'flex',alignItems:'center'}} >Payment Date:</label>
        <input type='date' onChange={(e)=>setPaymentDate(e.target.value)}  style={{
            height: '40px',
            width: '100%',
            fontSize: '1rem',
            borderRadius: 'var(--border-radius)',
            color: 'var(--txt-color)',
        }}/>
      </div>
      <div style={{width:'300px',display:'flex', margin:'10px 8px'}}>
        <label style={{width:'140px',display:'flex',alignItems:'center'}} >Self Deposite:</label>
        <input type='number' placeholder='Self Deposite' id = "self" onChange={(e)=>cvbn(e.target.value)}  style={{
          
            height: '40px',
            width: '100%',
            fontSize: '1rem',
            borderRadius: 'var(--border-radius)',
            color: 'var(--txt-color)',
        }}/>
      </div>
      <div style={{width:'300px',display:'flex', margin:'10px 8px'}}>
        <label style={{width:'140px',display:'flex',alignItems:'center'}} >Team Deposite:</label>
        <input type='number' placeholder='Team Deposite' id = "team" 
        onChange={(e)=>setteamDeposite(e.target.value)}  style={{
          
            height: '40px',
            width: '100%',
            fontSize: '1rem',
            borderRadius: 'var(--border-radius)',
            color: 'var(--txt-color)',
        }}/>
      </div>
      <div style={{width:'300px',display:'flex', margin:'10px 8px'}}>
        <label style={{width:'140px',display:'flex',alignItems:'center'}} >TDS:</label>
        <input type='text' placeholder='TDS' onChange={(e)=>setTDS(e.target.value)} style={{
          
            height: '40px',
            width: '100%',
            fontSize: '1rem',
            borderRadius: 'var(--border-radius)',
            color: 'var(--txt-color)',
        }}/>
      </div>
      <div style={{width:'300px',display:'flex', margin:'10px 8px'}}>
        <label style={{width:'140px',display:'flex',alignItems:'center'}} >Processing:</label>
        <input type='text' placeholder='Processing' onChange={(e)=>setProcessing(e.target.value)}  style={{
          
            height: '40px',
            width: '100%',
            fontSize: '1rem',
            borderRadius: 'var(--border-radius)',
            color: 'var(--txt-color)',
        }}/>
      </div>
      <div style={{width:'300px',display:'flex', margin:'10px 8px'}}>
        <label style={{width:'140px',display:'flex',alignItems:'center'}} >Total Amount:</label>
        <input type='text' placeholder='Total Amount'  //onChange={(e)=>setTotalAmount(e.target.value)} 
        onChange = {(e) => abc(e.target.value)}
        style={{
          
            height: '40px',
            width: '100%',
            fontSize: '1rem',
            borderRadius: 'var(--border-radius)',
            color: 'var(--txt-color)',
        }}/>
      </div>
      <div>
      {TotalAmount}
      </div>
      <div style={{width:'300px',display:'flex', margin:'10px 8px'}}>
        <label style={{width:'140px',display:'flex',alignItems:'center'}} >Pay Amount:</label>

        <div>
        {PayAmount}
        </div>
      </div>
      <div style={{width:'300px',display:'flex', margin:'10px 8px'}}>
        <label style={{width:'140px',display:'flex',alignItems:'center',}} >Detail:</label>
        <input type='text' placeholder='Details' onChange={(e)=>setDetail(e.target.value)}  style={{
          
            height: '40px',
            width: '100%',
            fontSize: '1rem',
            borderRadius: 'var(--border-radius)',
            color: 'var(--txt-color)',
        }}/>
      </div>
      </div>
      <div style={{
        width:'95%',
        display:'flex',
        justifyContent:'flex-end'
      }}>
        <button onClick={()=>setAdd(false)} style={{
          background:'red',
          padding:'10px 15px',
          fontSize:16,
          margin:'0px 14px',
          borderRadius:10,
          textTransform:'capitalize'
        }}>cancel</button>
        <button onClick={()=>postIncome()} style={{
          background:'#2ecc71',
          padding:'10px 15px',
          fontSize:16,
          borderRadius:10,
          textTransform:'capitalize'
        }}>Submit</button>
      </div>
      </div>
    </Backdrop>
    
  }
  return (
    <div className='body'>
      {Add?
      modal():null}
      <h2 className="page-header">Binary Payout Detail</h2>
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
              Total Paid Amount :
              <span
                style={{
                  marginLeft: "1%",
                  letterSpacing: "1px",
                }}
              >
                INR.{data}
              </span>
              <div className='AddBtn' style={{marginLeft:'2%',
              cursor:'pointer',
              padding:'8px 15px',
              fontSize:20,
              borderRadius:'5px',
              border:'1px solid var(--txt-white)'
            }} onClick={()=>setAdd(true)}>Add Payout</div>
            </div>
            <div className="card__body">
              {console.log(customerList)}
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

export default IncomeDetail;


// <input type='text' placeholder='Pay Amount' onChange={(e)=>setPayAmount(e.target.value)}  style={{
          
//   height: '40px',
//   width: '100%',
//   fontSize: '1rem',
//   borderRadius: 'var(--border-radius)',
//   color: 'var(--txt-color)',
// }}/>
