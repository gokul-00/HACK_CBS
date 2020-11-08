import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import location from '../../utlis/states.json';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width:"100%"
  },
}));

export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Location</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
            {
              location.state.map((key, i) => (
              <MenuItem value={i}>{key.key}</MenuItem>
              ))
            }
          <ListSubheader>Category 2</ListSubheader>
          {
            location.unionTerritories.map((key, i) => (
            <MenuItem value={i}>{key.key}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
}
