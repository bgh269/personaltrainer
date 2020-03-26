import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

export default function Navigator() {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography className="text-Typography" variant="h6">
                    Personal trainer 
                    </Typography>
                
                    <Link className="text-link" to="/customers">Customers</Link>{' '}
                    <Link className="text-link" to="/trainings">Trainings</Link>{' '}
                
                </Toolbar>
            </AppBar>
        </div>
    );
}