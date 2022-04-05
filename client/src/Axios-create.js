import axios from 'axios';

const instance=axios.create({
    baseURL:'http://localhost:4040/api/v1'
});
instance.defaults.headers.common['Content-Type']='application/json';
if(localStorage.getItem('token')){
    console.log(localStorage.getItem('token'))
    let data=localStorage.getItem('token')
    instance.defaults.headers.common['Authorization']=data;

// }else{
//     let data=localStorage.getItem('token');
//     console.log(data);
    // instance.defaults.headers.common['Authorization']='data';
// 
}
export default instance;