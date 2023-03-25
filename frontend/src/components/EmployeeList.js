import axios from "axios";
import React, {useEffect, useState} from "react";


function EmployeeList() {
  
  const [employees, setEmployees] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/api/emp')
      .then(response => setEmployees(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default EmployeeList;