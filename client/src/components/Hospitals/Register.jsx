import React, { useState } from 'react'
import { TextField, Button, Paper, makeStyles } from '@material-ui/core';
import {hospitalRegister} from '../../api/index'

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
    const initialData = {
        name:"",
        city:"",
        state:"",
        email:"",
        contactNo:0,
        password:""
    }
    const [data, setData] = useState(initialData)
    const handleSubmit = async(e) => {
        e.preventDefault()
        await hospitalRegister(data)
        setData(initialData)
    }
    return (
        <Paper className={classes.paper} >
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <TextField name="name" variant="outlined" label="Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })} 
                fullWidth />
                <TextField name="city" variant="outlined" label="City" value={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
                fullWidth />
                <TextField name="state" variant="outlined" label="State" value={data.state}
                onChange={(e) => setData({ ...data, state: e.target.value })}
                fullWidth />
                <TextField name="contact number" variant="outlined" label="Contact Number" type="tel" value={data.contactNo} 
                onChange={(e) => setData({ ...data, contactNo: e.target.value })}
                fullWidth/>
                <TextField name="email" variant="outlined" label="Email" value={data.email} 
                onChange={(e) => setData({ ...data, email: e.target.value })}
                fullWidth />
                <TextField name="password" variant="outlined" label="Password" value={data.password} 
                onChange={(e) => setData({ ...data, password: e.target.value })}
                fullWidth />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" 
                fullWidth>Submit</Button>
            </form>
        </Paper>
    )
}

export default Register
