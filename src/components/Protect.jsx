import { Navigate } from "react-router-dom";

const Protect = ({Child}) => {

    let verify = ()=>{
        if(localStorage.getItem("userdetails") == null){
            return false
        }
        else{
            return true;
        }
    }
    return ( 
        <div>
            {  verify() ? <Child/> : <Navigate to="/login"/>  }
        </div>
     );
}
export default Protect;


{/* <h1>hiii</h1> */}