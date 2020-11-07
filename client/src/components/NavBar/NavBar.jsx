import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Tab, Tabs} from '@material-ui/core'

function NavBar() {
  return (
    <AppBar>
      <Tabs>
        <Tab label="Home" as={Link} to='/' />
        <Tab label="Hospitals" as={Link} />
        <Tab label="PlasmaDonor" as={Link} />
      </Tabs>
    </AppBar>
  )
}

export default NavBar
