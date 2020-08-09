import React from 'react';
import {  Link } from 'react-router-dom'
import"bootstrap/dist/css/bootstrap.min.css";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Navigator = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg -light">
        
                <Link className="navbar-brand" to ="/" ></Link>
                <div className="collapsenavbar-collapse" id ="navbarSupportedContent">
                    <ul className="navbar-navmr-auto">
                    <ButtonGroup
                    orientation="horizontal"
                    color="primary"
                    aria-label="vertical outlined primary button group">
                   
                    <Button variant="outlined" color="primary">
                        <li 
                        className="nav -itemactive">
                        <Link className="nav-link"to="/components/Customerlist"  >Customers</Link>
                            </li>
                            </Button>
                            <Button variant="outlined" color="primary"><li
                             className="nav -item">
                            <Link className="nav-link"to="/components/Trainingcalendar">Calendar</Link>
                            </li>
                            </Button>
                            </ButtonGroup>
    
                                </ul >
                                </div>
                                </nav>
    );
}
export default Navigator;