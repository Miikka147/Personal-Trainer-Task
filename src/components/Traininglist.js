import React, { useState, useLayoutEffect, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import Editcustomer from './Editcustomer';
import Snackbar from '@material-ui/core/Snackbar';



export default function Traininglist(props) {
    console.log(props);
    const [cars, setCars] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch(props.link)
        .then(response => response.json())
        .then(data => setCars(data.content))
        
    }
    const parseDate = (d) => {if(typeof d !== 'undefined'){
    return(
    <div>{moment(d).format('LL')}</div>
    );}else{
        return(
            <div>No Scheduled appointments</div>
        )
    }
        
    
}




    const columns = [
        {
            Header: 'Date',
            accessor:'date',
            Cell: row => parseDate(row.value)
        },
        {
            Header: 'Duration',
            accessor: 'duration'
            
        },
        {
            Header: 'Activity',
            accessor: 'activity'
            
        }
       
    ]


    return (
        <div>
        
            
            <ReactTable data={cars} columns={columns} />
            
        </div>
    );
}