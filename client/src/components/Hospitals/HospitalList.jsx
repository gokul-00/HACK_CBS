import React, {useState, useEffect} from 'react'
import { Grid, makeStyles, CircularProgress} from '@material-ui/core'
import { hospitalData } from '../../api/index'
import Hospital from './Hospital'

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    grid: {
        marginBottom: 10
    },
}));

function HospitalList() {
    const classes = useStyles();
    const [list, setList] = useState([])

    useEffect(
        () => {
          async function fetchdata(){
            const response = await hospitalData()
            setList([ ...response ]);
          }
          fetchdata()
        },
    [])
    return (
        <div className={classes.root}>
            <Grid container>
                {list !== [] ? (
                    list.map((hospital) => (
                        <Grid key={hospital._id} item xs={12} sm={6} md={6} className={classes.grid}>
                          <Hospital hospital={hospital} />
                        </Grid>
                    ))
                ):(
                    <CircularProgress />
                )}
            </Grid>
        </div>
    )
}

export default HospitalList
