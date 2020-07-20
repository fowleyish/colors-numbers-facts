import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { Restore, ExitToApp } from '@material-ui/icons';

const Buttons = (props) => {

    const handleRedirect = () => {
        window.location.href="https://fowleyish.github.io";
    }

    return (
        <div className="myButtons">
            <Tooltip title="Reset">
                <IconButton aria-label="Reset" onClick={props.resetCount}><Restore/></IconButton>
            </Tooltip>
            <Tooltip title="Visit my portfolio">
                <IconButton aria-label="Visit my portfolio" onClick={handleRedirect}><ExitToApp/></IconButton>
            </Tooltip>
        </div>
    )
}

export default Buttons;