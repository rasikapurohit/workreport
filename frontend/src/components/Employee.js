import {React} from 'react';
import { useParams } from 'react-router-dom';

const Employee = () => {
    const params = useParams();
    return(

        <h2>{params.empCode}</h2>

    );
}

export default Employee;