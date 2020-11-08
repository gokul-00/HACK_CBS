import React from 'react'
import { TextField, Button, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
    },
    paper: {
    padding: theme.spacing(2),
    marginTop: 10
    },
    form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    },
    buttonSubmit: {
    marginBottom: 10,
    },
}));

function Register() {
    const classes = useStyles()
    return (
        <Paper className={classes.paper} >
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
            <TextField name="name" variant="outlined" label="Name" fullWidth />
            <TextField name="city" variant="outlined" label="City" fullWidth />
            <TextField name="state" variant="outlined" label="State" fullWidth />
            <TextField name="contact number" variant="outlined" label="Contact Number" type="tel" fullWidth/>
            <TextField name="email" variant="outlined" label="Email" fullWidth />
            <TextField name="password" variant="outlined" label="Password" fullWidth />
            <TextField name="password2" variant="outlined" label="Confirm Password" fullWidth />
            <TextField name="address" variant="outlined" label="Address" fullWidth multiline rows={4} />
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    )
}

export default Register
