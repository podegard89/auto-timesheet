import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './ClockInButton.css';

function ClockInButton(props) {
    const timeStamp = props.timeStamp;
    const handleClick = () => {
        timeStamp.setStartTime();
        timeStamp.setBannerDateFormat();
    }

    return (
        <MDBBtn floating className="clockButton" color="danger" onClick={handleClick}>Clock In</MDBBtn>
    )
}

export default ClockInButton;