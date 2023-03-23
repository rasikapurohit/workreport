import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Menu from './Menu';

const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const Dashboard = (props) => {

    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);

  return (
    <div>
      <Menu/>
      
    </div>
    
  )
}

export default Dashboard