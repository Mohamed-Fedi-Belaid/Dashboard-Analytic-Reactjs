import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default function Footer() {
 

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.digidis.tn/">
          Digidis
        </Link>{' '}
        , Made with ❤️ In  Tunisia &nbsp;
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  return (
    
    <>
        <Grid container spacing={2}>
                <Grid item xs={12}>
                      <Card sx={{ height: 10 + "vh" }}>  
                            <CardContent>
                                <Copyright/>
                            </CardContent>
                      </Card>
                </Grid>
        </Grid>
    </>
  );
}
