import React from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import DrawerHeader from '../components/Sidenav'
import Navbar from '../components/Navbar';
export default function AnalyseClientFournisseur() {
  return (
    <>
    <div className='bgcolor'>
      <Navbar />
        <Box height={30}/>
          <Box sx={{ display: 'flex' }}>

              <Sidenav/>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <h1>Analyse des clients et des fournisseurs</h1> 
              
          </Box>
        </Box>
    </div>
    </>
     )
}
