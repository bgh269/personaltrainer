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
                    <Typography variant="h6" >
                    Personal trainer 
                    </Typography>
                        <Link style={{color: "inherit", textDecoration: "none", margin:"2%"}} to="/customers">Customers</Link>{' '}
                        <Link style={{color: "inherit", textDecoration: "none"}} to="/trainings">Trainings</Link>{' '}          
                </Toolbar>
            </AppBar>
        </div>
    );
}