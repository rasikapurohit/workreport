import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FormFields from './FormFields';
import Menu from './common/Menu';

const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


const SubmitReport = () => {

    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);


    return (
        <div>
            <Menu />
            <FormFields/>
        </div>
    );

  
}

export default SubmitReport