import React from 'react'
import { TextField, Button, Paper, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';

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
    const [contact, setContact] = useState(0)
    const [otp, setOtp] = useState(0)
    const otpRequest = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/auth/plasmaDonor/otpinit',{contactNo:contact})
        .then(res => console.log(res))
        .catch(err => console.log(err))
        
    }
    const otpSubmit = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/auth/plasmaDonor',{contactNo:contact,otp:otp})
        .then(res => {
            console.log(res)
            localStorage.setItem("plasmaUserToken",res.data.token)
        })
        .catch(err => console.log(err))
        setOtp(0)
        setContact(0)
    }
    return (
        <Paper className={classes.paper} >
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={otpRequest}>
                <TextField name="contact number" variant="outlined" label="Contact Number" type="tel" value={contact} 
                onChange={e => setContact(e.target.value)}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Send</Button>
            </form>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={otpSubmit}>
                <TextField name="otp" variant="outlined" label="OTP" type="tel" value={otp} onChange={e => setOtp(e.target.value)} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
            </form>
        </Paper>
    )
}

export default OtpAuth
