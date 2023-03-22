import axios from "axios";
import React, {useEffect, useState} from "react";

function ProjectList() {
  
  const [employees, setEmployees] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/api/projects')
      .then(response => setEmployees(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.employee_code}>
            <h3>{employee.full_name}</h3>
            <p>Email: {employee.emp_email}</p>
            <p>Grade: {employee.grade}</p>
            <p>Supervisor: {employee.supervisor_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;