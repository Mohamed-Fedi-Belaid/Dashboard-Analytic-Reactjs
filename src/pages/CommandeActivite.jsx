import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CountUp from 'react-countup';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dashboard.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { colors, formControlClasses } from '@mui/material';
import BarChart from '../charts/BarChart';
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import BubbleChart from '../charts/BubbleChart';
import Footer from '../components/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Histogram } from '../charts/Histogram';
import { ColumnChart } from '../charts/ColumnChart';
export default function CommandeActivite() {
  
  const [dataNbTotalCommande, setDataNbTotalCommande] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbTotalCommande = await axios.get('http://');
        console.log(responseNbTotalCommande);
        setDataNbTotalCommande(responseNbTotalCommande);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const [dataNbCategorie, setDataNbCategorie] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbCategorie = await axios.get('http://');
        console.log(responseNbCategorie);
        setDataNbCategorie(responseNbCategorie);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [dataNbVenteParCategorie, setDataNbVenteParCategorie] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbVenteParCategorie = await axios.get('http://localhost:9000/api/v1/detailCommande/evolutionVentesParCategorie');
        console.log(responseNbVenteParCategorie);
        setDataNbVenteParCategorie(responseNbVenteParCategorie.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  
  
  
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
                          <Stack spacing={2} direction={'row'} > 
                            <Stack spacing={2} direction="row" marginLeft={2}>
                                <Card sx={{minWidth: 152 + "%", height: 30 + "vh" }}>
                                  <Stack spacing={2} margin={2}>
                                    <CardContent>
                                            <div className="iconstyle">
                                              <CreditCardIcon style={{fontSize:30}}/>
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                  <CountUp start={0} end={dataNbTotalCommande} duration={3} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                  Nombre total des commande
                                            </Typography>
                                    </CardContent>                                  
                                  </Stack>
                                </Card>
                                <Card sx={{minWidth: 152 + "%" , height: 30 + "vh" }}>
                                  <Stack spacing={2} margin={2} >
                                      <CardContent>
                                                <div className="iconstyle">
                                                  <CreditCardIcon style={{fontSize:30}}/>
                                                </div>
                                                <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                      <CountUp start={0} end={dataNbCategorie} duration={3} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                      Nombre de catégorie
                                                </Typography>
                                        </CardContent>  
                                  </Stack>
                                </Card>
                            </Stack>
                            
                          </Stack>
                        </Grid>
                        

                    </Grid>

                    <Box height={20}/>
                 
                    <Grid xs={12} container spacing={2}>
                      
                          <Grid item xs={8}>
                                <Card sx={{minWidth: 153.5 + "%", height: 50 + "vh" }}>  
                                      <CardContent>
                                        <ColumnChart dataNbVenteParCategorie={dataNbVenteParCategorie}/>
                                      </CardContent>
                                </Card>
                          </Grid>
                           
                     
                    </Grid> 
                    
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                            <Card sx={{minWidth: 50 + "%", height: 70 + "vh" }}>  
                                  <CardContent>
                                   <Histogram/>
                                  </CardContent>
                            </Card>
                      </Grid>
                      <Grid item xs={4}>
                                <Card sx={{minWidth: 104 + "%"  , height: 50 + "vh" }}>  
                                      <CardContent>
                                        <PieChart/>
                                      </CardContent>
                                </Card>
                          </Grid>
                    </Grid> 
                    <Footer/>
                </Stack>

                
            </Box>
            
        </Box>
    </div>
    
    </>
     )
}


