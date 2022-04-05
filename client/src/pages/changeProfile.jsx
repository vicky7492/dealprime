import './changeProfile.css';

import React, { useEffect, useState } from "react";

import axios from '../Axios-create';

const ChangeProfile = () => {
  const [customerList, setcustomerList] = useState([]);
  const [membername, setMembername] = useState("");
  const [password, setPassword] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [joiningdate, setJoiningDate] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [nominename, setNominename] = useState("");
  const [relation, setRelation] = useState("");
  const [bankname, setBankname] = useState("");
  const [bankbranch, setBankbranch] = useState("");
  const [accountnumber, setAccountnumber] = useState("");
  const [ifsccode, setIfsccode] = useState("");
  const [pannumber, setPannumber] = useState("");
  const [adharnumber, setAdharnumber] = useState("");

  const getIncomeDetail=()=>{
    axios.get(`/getUser/${localStorage.getItem('user')}`).then(res=>{
      console.log(res.data);
      setcustomerList([...res.data.data]);
      setMembername(res.data.name)
      setMobilenumber(res.data.mobilenumber)
      setJoiningDate(res.data.joiningDate)

    }).catch(err=>{
      console.log(err)
    })
  }

  useEffect(() => {
    getIncomeDetail();
  },[]);
  console.log(customerList)
  const Submit = () => {
    
    let data = {
      parentId:customerList[0].parentId,
      memeberId:customerList[0].memeberId,
      membername: membername?membername:customerList[0].membername,
      password: customerList[0].password,
      mobilenumber: customerList[0].mobilenumber,
      email: email?email:customerList[0].email,
      gender: gender?gender:customerList[0].gender,
      joiningdate: customerList[0].joiningdate,
      district: district?district:customerList[0].district,
      state: state?state:customerList[0].state,
      pincode: pincode?pincode:customerList[0].pincode,
      address: address?address:customerList[0].address,
      nominename: nominename?nominename:customerList[0].nominename,
      relation: relation?relation:customerList[0].relation,
      bankname: bankname?bankname:customerList[0].bankname,
      bankbranch: bankbranch?bankbranch:customerList[0].bankbranch,
      accountnumber: accountnumber?accountnumber:customerList[0].accountnumber,
      ifsccode: ifsccode?ifsccode:customerList[0].ifsccode,
      pannumber: pannumber?pannumber:customerList[0].pannumber,
      adharnumber: adharnumber?adharnumber:customerList[0].adharnumber,
    };
    axios.patch('/update/getUser',data).then(res=>{
      console.log(res.data);
      if(res.status===200){
        getIncomeDetail();
      }
    }).catch(err=>{
      console.log(err)
    })
  };
  return (
    <div>
      <h2 className="page-header">update Profile </h2>
      <div className="row" style={{
        display:'flex',
        justifyContent:'center'
      }}>
        <div className="col-11">
          <div className="card">
            <div className="card__body">
            <div className='FormCard_Row1'>
                    <div className='FormControl'>
                        <label>applicant name</label>
                        <input type='text' placeholder='name'
                        defaultValue={membername}
                        disabled={true}
                            className='Form_Input'

                            onChange={(e) => setMembername(e.target.value)} 
                            name={membername} />
                    </div>
                    <div className='FormControl'>
                        <label>password</label>
                        <input type='text' placeholder='password ' 
                        className='Form_Input' onChange={(e) => setPassword(e.target.value)} name={password} />
                    </div>
                    <div className='FormControl'>
                        <label>mobile number</label>
                        <input type='text' 
                        disabled={true}
                        defaultValue={mobilenumber}
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
                        defaultValue={joiningdate}

                        disabled={true}
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
                        <label>Account number</label>
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
            <div className='FormCard_Row2'>
                <div className='Form_Submit_Button'>
                <button className='green-color' onClick={() => Submit()}> submit</button>
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ChangeProfile;
