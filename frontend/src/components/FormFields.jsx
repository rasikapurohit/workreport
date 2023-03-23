import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';


const FormFields = props => {
  return (
    <div className='container'>
        <table className='table table-hover '>
            <thead>
                <tr>
                <th>Sr. No.</th>
                <th>Project</th>
                <th>Task Description</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Total Hours</th>
                <th>Add</th>
                </tr>
                </thead>
        </table>
    </div>
  )
}

FormFields.propTypes = {}

export default FormFields