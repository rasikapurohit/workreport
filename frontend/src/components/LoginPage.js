import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

    const navigate = useNavigate();

    const [employeeCode, setEmployeeCode] = useState("");
    const [employeePwd, setEmployeePwd] = useState("");
    const [isLoggedin, setLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const userData = {employeeCode, employeePwd};

    const handleLogin = () => {
        axios.post('http://localhost:5000/api/login', userData)
        .then(response => {
            if (response.status === 200) {
                setLoggedIn(true);                
                const token = response.data.token;
                const username = response.data.user;
                const grade = response.data.grade;
                // Store the token in local storage or state variable
                localStorage.setItem('token', token);
                localStorage.setItem('name', username);
                localStorage.setItem('grade', grade);
                navigate('/dashboard');
             }        
        })//end of then and try
        .catch(error => {
            setErrorMessage("Invalid credentials");
            console.error(error)
        });//end of catch

    };// end of handlesubmit

    return(
		<div className="container">
            <h4>{errorMessage}</h4>
            
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
    	</div>

    )

}

export default LoginPage;

