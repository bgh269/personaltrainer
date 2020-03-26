import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import AddTraining from './AddTraining';

export default function Customers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => fecthData(), []);

    const fecthData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err))
    }

    const deleteCustomer = (link) => {
        //console.log(link);
        if (window.confirm('Are you sure you want to delete this customer?')) {
        fetch(link, {method: 'DELETE'})
        .then(response => fecthData())
        .catch(err => console.error(err))
        }
    }

    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
         method: 'POST',
         headers: {
             'Content-type': 'application/json'
         },
         body: JSON.stringify(customer)   
        })
        .then(response => fecthData())
        .catch(err => console.error(err))
    }

    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customer) 
        })
        .then(response => fecthData())
        .catch(err => console.error(err))
    }

    const saveTraining = (training, link) => {
        fetch(link, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(training) 
        })
        .then(response => fecthData())
        .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: 'First name',
            accessor: 'firstname'
        },
        {
            Header: 'Last name',
            accessor: 'lastname'
        },
        {
            Header: 'Street address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
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
            width: 200,
            //accessor: 'links[0].href',
            Cell: row => <AddTraining saveTraining={saveTraining} training={row.original}/>  
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <EditCustomer updateCustomer={updateCustomer} customer={row.original}/>
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: row => <Button size="small" variant="outlined" color="secondary" onClick={() => deleteCustomer(row.value)}>Delete</Button>
        }
    ]

    return (
        <div>
            <AddCustomer saveCustomer={saveCustomer}/>
            <ReactTable filterable={true} data={customers} columns={columns}/>
        </div>
    );
}