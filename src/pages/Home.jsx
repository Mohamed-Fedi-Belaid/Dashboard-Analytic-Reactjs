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
export default function Home() {
  return (
    <>
    <div className='bgcolor'>
    <Navbar />
      <Box height={70}/>
        <Box sx={{ display: 'flex' }}>
          <Sidenav/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Stack spacing={2}> 
              <Grid container spacing={2}>
                <Grid item xs={8}>  
                  <Stack spacing={2} direction={'row'}> 
                      <Card sx={{ minWidth: 49 + "%", height: 177 }} className="gradient">  
                            <CardContent>
                              <div className="iconstyle">
                                <CreditCardIcon style={{fontSize:30}}/>
                              </div>
                              <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                                $500.00 
                              </Typography>
                              <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                Total Earnings
                              </Typography>
                             
                            </CardContent>
                      </Card> 
                      <Card sx={{ minWidth: 49 + "%", height: 177 }} className="gradientlight">  
                            <CardContent>
                              <div className="iconstyle">
                                <ShoppingBagIcon style={{fontSize:30}}/>
                              </div>
                              <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                                $900.00
                              </Typography>
                              <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                Total Order
                              </Typography>
                          
                            </CardContent>
                      </Card> 
                  </Stack>  
                </Grid>
                <Grid item xs={4}>
                   <Stack spacing={2} >          
                      <Card sx={{maxWidth: 370, height: 10, paddingBottom: 10}} className="gradientlight">  
                            <CardContent>
                              <Stack spacing={2} direction="row" alignItems="center" > 
                               <div className="iconstyle" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                 <StorefrontIcon style={{fontSize:30}}/>
                               </div>
                               <div className="paddingall">
                                  <span className="pricetitle">$ 230K</span>
                                  <br/>
                                  <span className="pricesubtitle">Total Income</span>
                               </div>
                               </Stack>
                            </CardContent>
                      </Card>
                      <Card sx={{ maxWidth: 370, height: 10, paddingBottom: 10 }} >  
                            <CardContent>
                              <Stack spacing={2} direction="row" alignItems="center" > 
                               <div className="iconstyleblack">
                                 <StorefrontIcon style={{fontSize:30}}/>
                               </div>
                               <div className="paddingall">
                                  <span className="pricetitle">$ 230K test</span>
                                  <br/>
                                  <span className="pricesubtitle">Total Income</span>
                               </div>
                               </Stack>
                            </CardContent>
                      </Card> 
                   </Stack>

                </Grid>
          
              </Grid> 
              
              <Grid container spacing={2}>
                <Grid item xs={8}>  
                  <Stack spacing={2} direction={'row'}> 
                      <Card sx={{ minWidth: 49 + "%", height: 177 }} className="gradient">  
                            <CardContent>
                              <div className="iconstyle">
                                <CreditCardIcon style={{fontSize:30}}/>
                              </div>
                              <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                                $500.00 
                              </Typography>
                              <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                Total Earnings
                              </Typography>
                             
                            </CardContent>
                      </Card> 
                      <Card sx={{ minWidth: 49 + "%", height: 177 }} className="gradientlight">  
                            <CardContent>
                              <div className="iconstyle">
                                <ShoppingBagIcon style={{fontSize:30}}/>
                              </div>
                              <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                                $900.00
                              </Typography>
                              <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                Total Order
                              </Typography>
                          
                            </CardContent>
                      </Card> 
                  </Stack>  
                </Grid>
                <Grid item xs={4}>
                   <Stack spacing={2} >          
                      <Card sx={{maxWidth: 370, height: 10, paddingBottom: 10}} className="gradientlight">  
                            <CardContent>
                              <Stack spacing={2} direction="row" alignItems="center" > 
                               <div className="iconstyle" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                 <StorefrontIcon style={{fontSize:30}}/>
                               </div>
                               <div className="paddingall">
                                  <span className="pricetitle">$ 230K</span>
                                  <br/>
                                  <span className="pricesubtitle">Total Income</span>
                               </div>
                               </Stack>
                            </CardContent>
                      </Card>
                      <Card sx={{ maxWidth: 370, height: 10, paddingBottom: 10 }} >  
                            <CardContent>
                              <Stack spacing={2} direction="row" alignItems="center" > 
                               <div className="iconstyleblack">
                                 <StorefrontIcon style={{fontSize:30}}/>
                               </div>
                               <div className="paddingall">
                                  <span className="pricetitle">$ 230K test</span>
                                  <br/>
                                  <span className="pricesubtitle">Total Income</span>
                               </div>
                               </Stack>
                            </CardContent>
                      </Card> 
                   </Stack>

                </Grid>
          
              </Grid> 
              <Box height={20}/>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                      <Card sx={{ height: 75 + "vh" }}>  
                            <CardContent>
                              <BarChart />
                            </CardContent>
                      </Card>
                </Grid>
                <Grid item xs={4}>
                      <Card sx={{ height: 75 + "vh" }}>  
                            <CardContent>
                              
                            </CardContent>
                      </Card>
                </Grid> 
              </Grid> 
              <Grid container spacing={2}>
                <Grid item xs={8}>
                      <Card sx={{ height: 60 + "vh" }}>  
                            <CardContent>
                              
                            </CardContent>
                      </Card>
                </Grid>
                <Grid item xs={4}>
                      <Card sx={{ height: 60 + "vh" }}>  
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


