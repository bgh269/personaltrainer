import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';

export default function Trainings() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchTrainingsData(), []);

    const fetchTrainingsData = () => {
        fetch('https://customerrest.herokuapp.com/api/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
        .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: 'Date',
            accesor: 'date',
            Cell: row => moment(row.date).format('DD.MM.YYYY hh:mm a')
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
            accesor: 'customer.firstname' +' '+ 'customer.lastname'
        }
    ]

    return (
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    );
}