
import Login from '../Components/regisiter/login';
import Loader from '../Components/Loader/Loader';
import { useState,useEffect } from "react";
import Imagecomp from '../Components/regisiter/imagecomp';
import "../Components/regisiter/textfield.css"


function Loginpage() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  },[])
  return (<>
  {loading ? <Loader/>:
    <div className='Loginpage'>
    <div className="container mt-3 mb-4">
      <div className="row">
        <div className="col-md-5">
          <Login />
        </div>
      

      <Imagecomp/>
      </div>
    </div>
    </div>
}</>
  );
}

export default Loginpage;