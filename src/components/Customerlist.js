import React, { useState, useLayoutEffect, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Customerstrainings from './Customerstrainings'
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';
import Snackbar from '@material-ui/core/Snackbar';



export default function Customerlist() {
    const [customers, setCustomers] = useState([]);
    const [links, setLinks] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        
    }
    const [open, setOpen] = React.useState(false);
    const deleteCustomer = (link) => {
        if(window.confirm('Are you sure?')){
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
        handleClick();
        
    }
}
const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })  
        .then(res => fetchData())
        .catch(err => console.error(err))
  }
  const updateCustomer = (customer, link) => {
      fetch(link, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
  })  
  .then(res => fetchData())
  .catch(err => console.error(err))
  }
  



    const columns = [
        {
            Header: 'Firstname',
            accessor: 'firstname'
        },
        {
            Header: 'Lastname',
            accessor: 'lastname'
        },
        {
            sortable: false,
            filterable: false,
            Cell: row => <Customerstrainings customer={row.original}/>
        },
        {
            Header: 'Street',
            accessor: 'city',
            accessor: 'streetaddress'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row.original}/>
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: row => <Button size='small' color='secondary' onClick={() =>deleteCustomer(row.value)} >Delete</Button>
        }
    ]


    return (
        <div>
              <Addcustomer saveCustomer={saveCustomer}/>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Customer Deleted"
                action={
                    <React.Fragment>
                    <Button color="secondary" size="small" onClick={handleClose}>
                    Close
                    </Button>
                    </React.Fragment>
                }
            />
            <ReactTable filterable={true} data={customers} columns={columns} />
            
        </div>
    );
}