import React, {useState} from "react";
import axios from "axios";
import {Navigate, Outlet} from 'react-router-dom';

const LoginPage = () => {

    const [employeeCode, setEmployeeCode] = useState("");
    const [employeePwd, setEmployeePwd] = useState("");

    const [loginStatus, setLoginStatus] = useState(false);

    const userData = {employeeCode, employeePwd};

    const handleLogin = () => {
        axios.post('http://localhost:5000/api/login', userData)
        .then(response => {
            console.log(response);
            if (!response.data) {
                setLoginStatus( response.data);
             } else {
                //console.log(response.data);
                
                if (response.data === "Login successful..."){
                    setLoginStatus(true);
                    console.log(loginStatus);
             }
            }

            // return loginStatus ? <Outlet /> : <EmployeeList/>

        })//end of then and try
        .catch(error => {
            console.log(error)
        });//end of catch

    };// end of handlesubmit

    return(
		<div className="container">
      		<h1>Login Page</h1>

			<div className="mb-3 mt-3">
				<label className="form-label">Employee Code:</label>
				<input type="text" id="empCode" maxLength='6' value={employeeCode} onChange={(e) => setEmployeeCode(e.target.value)} className="form-control" placeholder="101010" />
			</div>

			<div className="mb-3 mt-3">

      			<label className="form-label">Password:</label>
      			<input type="password" id="empPwd" value={employeePwd} onChange={(e) => setEmployeePwd(e.target.value)} className="form-control"/>
			</div>
			
			<button onClick={handleLogin} className="btn btn-primary">Login</button>
        <h3>{loginStatus}</h3>

    	</div>

    )

}

export default LoginPage;

