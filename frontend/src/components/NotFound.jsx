import {React} from 'react';
import { Navigate } from 'react-router-dom';

const NotFound = () => {
    return(
        <div>
            <Navigate to="/" />
        </div>
    );
};

export default NotFound;