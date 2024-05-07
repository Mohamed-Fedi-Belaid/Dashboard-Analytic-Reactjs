import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import DrawerHeader from '../components/Sidenav'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dashboard.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { colors } from '@mui/material';
import BarChart from '../charts/BarChart';
export default function PerfermanceDesVentes() {
  return (
    <>
    <div className='bgcolor'>
    <Navbar />
      <Box height={70}/>
        <Box sx={{ display: 'flex' }}>
          <Sidenav/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Stack spacing={2}> 
                    <Grid container spacing={2} >
                      
                        <Grid item xs={4} >
                          <Stack spacing={2} > 
                            <Stack spacing={2} direction="row">
                                <Card sx={{width: 200, height: 30 + "vh" }}>
                                  <Stack spacing={2}>
                                      <CardContent>
                                      
                                      </CardContent>                                     
                                  </Stack>
                                </Card>
                                <Card sx={{width: 200 , height: 30 + "vh" }}>
                                  <Stack spacing={2}>
                                      <CardContent>
                                      
                                      </CardContent>
                                  </Stack>
                                </Card>
                            </Stack>
                            <Stack spacing={2} direction="row">
                                <Card sx={{width: 200, height: 30 + "vh" }}>
                                  <Stack spacing={2}>
                                      <CardContent>
                                      
                                      </CardContent>
                                      
                                  </Stack>
                                </Card>
                                <Card sx={{width: 200 , height: 30 + "vh" }}>                                  
                                  <Stack spacing={2}>
                                      <CardContent>
                                      
                                      </CardContent>
                                      
                                  </Stack>
                                </Card>
                            </Stack>
                          </Stack>
                        </Grid>
                        <Grid item xs={8} >
                          <Stack spacing={2} direction="row">
                              <Card sx={{width: 900 , height: 62.5 + "vh" }}>
                                <Stack spacing={2}>
                                    
                                    <CardContent>
                                    
                                    </CardContent>
                                </Stack>
                              </Card>
                              
                          </Stack>
                        </Grid>

                    </Grid>

                    <Box height={20}/>
                 
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
                            <Card sx={{ height: 50 + "vh" }}>  
                                  <CardContent>
                                   
                                  </CardContent>
                            </Card>
                      </Grid>
                      <Grid item xs={4}>
                            <Card sx={{ height: 50 + "vh" }}>  
                                  <CardContent>
                                    
                                  </CardContent>
                            </Card>
                      </Grid> 
                    </Grid> 
                    
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                            <Card sx={{ height: 10 + "vh" }}>  
                                  <CardContent>
                                    
                                  </CardContent>
                            </Card>
                      </Grid>
                    </Grid> 
                </Stack>

                
            </Box>
            
        </Box>
    </div>
    
    </>
     )
}


