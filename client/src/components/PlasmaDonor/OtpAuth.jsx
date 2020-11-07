import React from 'react'
import { TextField, Button, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
    },
    paper: {
    padding: theme.spacing(1),
    marginTop: 10
    },
    form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    },
    buttonSubmit: {
    padding: theme.spacing(1),
    marginBottom: 10,
    },
}));

function OtpAuth() {
    const classes = useStyles()
    return (
        <Paper className={classes.paper} >
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                <TextField name="contact number" variant="outlined" label="Contact Number" type="tel" />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Send</Button>
            </form>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                <TextField name="otp" variant="outlined" label="OTP" type="tel" />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
            </form>
        </Paper>
    )
}

export default OtpAuth
