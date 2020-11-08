import React, {useState} from 'react'
import { TextField, Button, Paper, makeStyles } from '@material-ui/core';
import axios from 'axios'

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

function UserInfo() {
    const classes = useStyles()
    const initialData = {
        name:"",
        city:"",
        state:"",
        address:"",
        bloodGroup:""
    }
    const [data, setData] = useState(initialData)
    const handleSubmit = async(e) => {
        e.preventDefault()
        const token = localStorage.getItem("plasmaUserToken")
        await axios.post('http://localhost:5000/auth/plasmaDonor/updateinfo',data, {headers: {'Auth-Token': token}})
        .then(res => console.log(res))
        .catch(err => console.log(err))
        setData(initialData)
    }
    return (
        <Paper className={classes.paper} >
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <TextField name="name" variant="outlined" label="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            fullWidth />
            <TextField name="city" variant="outlined" label="City"
            value={data.city}
            onChange={(e) => setData({ ...data, city: e.target.value })}
            />
            <TextField name="state" variant="outlined" label="State"
            value={data.state}
            onChange={(e) => setData({ ...data, state: e.target.value })}
            />
            <TextField name="bloodGroup" variant="outlined" label="Blood Group" 
            value={data.bloodGroup}
            onChange={(e) => setData({ ...data, bloodGroup: e.target.value })}
            />
            <TextField name="address" variant="outlined" label="Address" fullWidth multiline rows={4} 
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            />
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    )
}

export default UserInfo
