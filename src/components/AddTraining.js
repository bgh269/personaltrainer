import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import moment from "moment";

export default function AddTraining(props) {
  const [open, setOpen] = useState(false);
  const [training, setTraining] = useState({
    date: "",
    duration: "",
    activity: "",
    customer: ""
  });

  const handleClickOpen = () => {
    setOpen(true);
    console.log(props.training);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = event => {
    setTraining({ ...training, [event.target.name]: event.target.value });
  };

  const addTraining = () => {
    const newDate = moment(training.date).toISOString(); //päiväyksen muunnos oikeaan muotoon
    const newTraining = {
      ...training,
      customer: props.training.links[0].href,
      date: newDate
    }; //uuden treenin lisäys asiakkaalle eli haetaan customerista propseilla ja lisätään trainingiin ja pvm haku
    props.saveTraining(newTraining);
    handleClose();
  };

  return (
    <div>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Add Training
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Training</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            type="datetime-local" //tällä saa valittua päiväyksen ja kellon ajan oikeassa muodossa
            name="date"
            value={training.date}
            onChange={event => handleInputChange(event)}
            label="Date"
            fullWidth
          />
          <TextField
            margin="dense"
            name="duration"
            value={training.duration}
            onChange={event => handleInputChange(event)}
            label="Duration (min)"
            fullWidth
          />
          <TextField
            margin="dense"
            name="activity"
            value={training.activity}
            onChange={event => handleInputChange(event)}
            label="Activity"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addTraining} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
