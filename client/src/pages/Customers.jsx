import './changeProfile';

import React, { useEffect, useState } from 'react'

import  Backdrop  from "../components/BackDrop/Backdrop";
import Table from '../components/table/Table'
import axios from '../Axios-create';

const customerTableHead = [
    '',
    'Member Id',
    'Member Name',
    'Parent Id',
    'Joining Date',
    'Status'
]

const renderHead = (item, index) => <th key={index}>{item}</th>



const Customers = () => {
    const [customerList, setcustomerList] = useState([
        {"id":1,
        "memberId":"179144353",
        "parentId":"170162685",
        "joiningDate":"16/11/2020",
        "memberName":"Aript Srivastava",
    },

    ]);
    const [isActive, setIsactive] = useState(false)
  const [Add, setAdd] = useState(false);
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

    let getIncomeDetail=()=>{
        axios.get('/users').then(res=>{
          

          // console.log(res.data);
          setcustomerList([...res.data.data])
        }).catch(err=>{
          console.log(err)
        })
      }
      const postIncome=()=>{
        let data={
            parentId:localStorage.getItem('user'),
            memeberId:'',
            membername: membername,
            password:password,
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
    
        }
        
        axios.post('/directTeam',data).then(res=>{
        console.log("isActive")
          if(res.status===200){
            setAdd(false);
            getIncomeDetail();
          }
        }).catch(err=>{
          console.log(err)
        })
        console.log(data)
      }
      // useEffect
      useEffect(() => {
        getIncomeDetail();
      },[])

      // useEffect
      useEffect(() => {
        console.log(isActive)
      },[isActive])

    const renderBody = (item, index) => {
      if(item.parentId===localStorage.getItem('user')){

        return <tr key={index}>
            <td>{index+1}</td>
            <td>{item.memeberId}</td>
            <td>{item.membername}</td>
            <td>{item.parentId}</td>
            <td>{item.joiningdate}</td>
      <td><select style={isActive ? {backgroundColor: "green"} : {backgroundColor: "red"}} onChange={() => setIsactive(!isActive)} ><option value="inactive">Inactive</option><option value="Active">Active</option></select></td>
        </tr>
      }
    }
    const modal=()=>{
        return <Backdrop>
              <div className='col-7'>

          <div className='card' style={{
              width:'fit-content'
          }}>

               <div className='FormCard_Row1'>
                    <div className='FormControl'>
                        <label>applicant name</label>
                        <input type='text' placeholder='name'
                        
                            className='Form_Input'

                            onChange={(e) => setMembername(e.target.value)} name={membername} />
                    </div>
                    <div className='FormControl'>
                        <label>password</label>
                        <input type='text' placeholder='password ' className='Form_Input' onChange={(e) => setPassword(e.target.value)} name={password} />
                    </div>
                    <div className='FormControl'>
                        <label>mobile number</label>
                        <input type='text' 
                        placeholder='mobile number ' className='Form_Input' onChange={(e) => setMobilenumber(e.target.value)} name={mobilenumber} />
                    </div>
                    <div className='FormControl'>
                        <label>email</label>
                        <input type='text' placeholder='email' className='Form_Input' onChange={(e) => setEmail(e.target.value)} name={email} />
                    </div>
                    <div className='FormControl'>
                        <label>gender</label>
                        <input type='text' placeholder='gender' className='Form_Input' onChange={(e) => setGender(e.target.value)} name={gender} />
                    </div>
                    <div className='FormControl'>
                        <label>joining date</label>
                        <input type='date'
                         placeholder='joining date' className='Form_Input' onChange={(e) => setJoiningDate(e.target.value)} name={joiningdate} />
                    </div>
                    <div className='FormControl'>
                        <label>district</label>
                        <input type='text' placeholder='district' className='Form_Input' onChange={(e) => setDistrict(e.target.value)} name={district} />
                    </div>
                    <div className='FormControl'>
                        <label>state</label>
                        <input type='text' placeholder='state' className='Form_Input' onChange={(e) => setState(e.target.value)} name={state} />
                    </div>
                    <div className='FormControl'>
                        <label>pin code</label>
                        <input type='text' placeholder='pin code' className='Form_Input' onChange={(e) => setPincode(e.target.value)} name={pincode} />
                    </div>

                    <div className='FormControl'>
                        <label>address</label>
                        <input type='text' placeholder='address' className='Form_Input' onChange={(e) => setAddress(e.target.value)} name={address} />
                    </div>
                    <div className='FormControl'>
                        <label>nomine name</label>
                        <input type='text' placeholder='nomine name' className='Form_Input' onChange={(e) => setNominename(e.target.value)} name={nominename} />
                    </div>
                    <div className='FormControl'>
                        <label>relation</label>
                        <input type='text' placeholder='relation' className='Form_Input' onChange={(e) => setRelation(e.target.value)} name={relation} />
                    </div>
                    <div className='FormControl'>
                        <label>bank name</label>
                        <input type='text' placeholder='bank name' className='Form_Input' onChange={(e) => setBankname(e.target.value)} name={bankname} />
                    </div>
                    <div className='FormControl'>
                        <label>bank branch</label>
                        <input type='text' placeholder='bank branch' className='Form_Input' onChange={(e) => setBankbranch(e.target.value)} name={bankbranch} />
                    </div>
                    <div className='FormControl'>
                        <label style={{
                            textAlign:'left'
                        }}>Account number</label>
                        <input type='text' placeholder='Account number' className='Form_Input' onChange={(e) => setAccountnumber(e.target.value)} name={accountnumber} />
                    </div>
                    <div className='FormControl'>
                        <label>i.f.s.c code</label>
                        <input type='text' placeholder='i.f.s.c code' className='Form_Input' onChange={(e) => setIfsccode(e.target.value)} name={ifsccode} />
                    </div>
                    <div className='FormControl'>
                        <label>pan number</label>
                        <input type='text' placeholder='pan number' className='Form_Input' onChange={(e) => setPannumber(e.target.value)} name={pannumber} />
                    </div>
                    <div className='FormControl'>
                        <label>adhar number</label>
                        <input type='text' placeholder='adhar number' className='Form_Input' onChange={(e) => setAdharnumber(e.target.value)} name={adharnumber} />
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
            <button 
            onClick={()=>postIncome()} 
            style={{
              background:'#2ecc71',
              padding:'10px 15px',
              fontSize:16,
              borderRadius:10,
              textTransform:'capitalize'
            }}>Submit</button>
          </div>
          </div>
          </div>
        </Backdrop>
        
      }
    return (
        <div>
             {Add?
 modal():null}
            <h2 className="page-header">
            Direct Member List
            </h2>
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
              }}>

              <div className='AddBtn' style={{marginLeft:'2%',
              cursor:'pointer',
              padding:'8px 15px',
              fontSize:20,
              borderRadius:'5px',
              border:'1px solid var(--txt-white)'
            }} onClick={()=>setAdd(true)}>Add member</div>
            </div>
                        <div className="card__body">
                            <Table
                                limit='10'
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
    )
}

export default Customers
