import React from "react";
//import EmployeeList from "./EmployeeList";
//import ProjectForm from './components/LoginPage'
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import ProjectForm from "./components/ProjectForm";
import Employee from "./components/Employee";
import NotFound from "./components/NotFound";


function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}>
                    <Route path="/projects" element={<ProjectForm />}/>
                    <Route path="/emp" element={<div><EmployeeList /> <Outlet/></div> }>
                        <Route path=":empCode" element={<Employee />}/>
                    </Route>
                </Route>

                <Route path="*" element={<NotFound/>}/>

            </Routes>
        </BrowserRouter>  
    );
}




export default App;
