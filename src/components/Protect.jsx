import { Navigate } from "react-router-dom";

function Protect(props){

    let greyman_data=JSON.parse(localStorage.getItem("grey_man"));

    let token = greyman_data ? greyman_data.token : null;

    return token!==null?(
        props.children
        
    ):
    <Navigate to={"/sign-in"}/>
}
export default Protect;