import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';
import Button from '@material-ui/core/Button';

export default function Trainings() {
    const [trainings, setTrainings] = React.useState([]);

    React.useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
        .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: 'Date',
            accesor: 'date',
            Cell: row => moment(row.date).format('YYYY-MM-DD hh:mm') 
        },
        {
            Header: 'Duration (min)',
            accesor: 'duration'
        },
        {
            Header: 'Activity',
            accesor: 'activity'
        },
        {
            Header: 'Customer',
            accesor: 'customer.firstname' + ' ' + 'customer.lastname'
        },
       
    ]

    return (
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    );
}