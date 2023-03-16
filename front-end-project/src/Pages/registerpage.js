

import "../Components/regisiter/textfield.css"
import Loader from '../Components/Loader/Loader';
import { useState,useEffect } from "react";
import Imagecomp from '../Components/regisiter/imagecomp';
import Register from '../Components/regisiter/register';
import "../Components/regisiter/textfield.css"


function Regisiterpage() {
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
    <div className="containeeer ">
      <div className="rooow">
        <div className="colll5">
          <Register />
        </div>
        
        <Imagecomp/>
   
      </div>
    </div>
    </div>
}</>
  );
}

export default Regisiterpage;

