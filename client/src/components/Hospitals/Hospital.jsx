import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    border: {
    border: 'solid',
    },
    fullHeightCard: {
    height: '100%',
    },
    card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
    margin: 10,
    backgroundColor: '#b3e5fc'
    },
    grid: {
    display: 'flex',
    },

    title: {
    padding: '0 16px',
    },
}));

const Hospital = ({ hospital }) => {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">{hospital.name.toUpperCase()}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Bed vacancy : {hospital.bedsAvailable}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Plasma Therapy Facility : {hospital.plasmaFacility?"Available":"Not Available"}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">City : {hospital.city}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">State : {hospital.state}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Contact Number : {hospital.contactNo}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Email : {hospital.email}</Typography>
        </CardContent>
      </Card>
    );
  };
  
export default Hospital;
  