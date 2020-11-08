import React, {useState} from 'react'
import { AppBar, Tabs, Tab, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState('');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenu(event.target.innerHTML)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Tabs onChange={handleChange} value={value}>
        <Tab label="Home" component={Link} to="/" />
        <Tab label="Hospitals" onClick={handleClick} />
        <Tab label="Plasma Donor" onClick={handleClick}/>
      </Tabs>
    </AppBar>
    {
      (menu === 'Hospitals') ? (
        <Menu
          id="hospital"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/hospitals">Hospital List</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/hospital/register">Register</MenuItem>
        </Menu>
      ):(
        <Menu
          id="hospital"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/plasmaDonor">Plasma Donor</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/plasmaDonor/register">Register</MenuItem>
        </Menu>
      )
    }
    
    </div>
  )
}

export default NavBar
