import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="title" color="inherit">
        <Link to="/">Voices</Link>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
