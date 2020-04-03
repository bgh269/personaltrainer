import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import moment from "moment";
import Button from "@material-ui/core/Button";

export default function Trainings() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch("https://customerrest.herokuapp.com/gettrainings")
      .then(response => response.json())
      .then(data => setTrainings(data))
      .catch(err => console.error(err));
  };

  const deleteTraining = link => {
    //console.log(link);
    if (window.confirm("Are you sure you want to delete this training?")) {
      fetch("https://customerrest.herokuapp.com/api/trainings/" + link, {
        method: "DELETE"
      })
        .then(response => fetchData())
        .catch(err => console.error(err));
    }
  };

  const columns = [
    {
      Header: "Date",
      accessor: "date",
      Cell: row => moment(row.value).format("DD.MM.YYYY hh:mm a")
    },
    {
      Header: "Duration (min)",
      accessor: "duration"
    },
    {
      Header: "Activity",
      accessor: "activity"
    },
    {
      Header: "Customer",
      accessor: "customer",
      Cell: row => (
        <div>
          {row.original.customer.firstname} {row.original.customer.lastname}
        </div>
      )
    },
    {
      sortable: false,
      filterable: false,
      width: 100,
      accessor: "id",
      Cell: row => (
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => deleteTraining(row.value)}
        >
          Delete
        </Button>
      )
    }
  ];

  return (
    <div>
      <ReactTable filterable={true} data={trainings} columns={columns} />
    </div>
  );
}
