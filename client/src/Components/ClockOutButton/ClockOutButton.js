import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './ClockOutButton.css';

function ClockOutButton(props) {
    const timeStamp = props.timeStamp;
    const handleClick = () => {
        console.log("button clicked");
    }

    return (
        <MDBBtn floating className="clockButton" color="success" onClick={handleClick}>Clock Out</MDBBtn>
    )
}

export default ClockOutButton;