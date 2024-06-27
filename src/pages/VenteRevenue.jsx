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
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GeoChart from '../charts/GeoChart';
import Footer from '../components/Footer';
import { LineChart } from '../charts/LineChart';
import { ColumnChart1 } from '../charts/ColumnCahrt1';
import TunisiaMap from '../charts/MapContainer';
import { Bar2 } from '../charts/Bar2';

import { Table1 } from '../charts/Table1';


import { TableTauxRetention} from '../charts/TableTauxRetention';
import { TableTauxConversion } from '../charts/TableTauxConversion';
export default function VenteRevenue() {
  
  const [dataProfit, setDataProfit] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseProfit = await axios.get('http://localhost:9000/api/v1/article/getProfit');
        console.log(responseProfit.data[0].profit);
        setDataProfit(responseProfit.data[0].profit);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [dataNbTotalVente, setDataNbTotalVente] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbTotalVente = await axios.get('http://localhost:9000/api/v1/commande/count');
        console.log(responseNbTotalVente);
        setDataNbTotalVente(responseNbTotalVente.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [dataSommeTotalVente, setDataSommeTotalVente] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSommeTotalVente = await axios.get('http://localhost:9000/api/v1/commande/sum');
        console.log(responseSommeTotalVente);
        setDataSommeTotalVente(responseSommeTotalVente.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [dataMoyennePanierParCommande, setDataMoyennePanierParCommande] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseMoyennePanierParCommande = await axios.get('http://localhost:9000/api/v1/commande/sumDividedByCountAll');
        console.log(responseMoyennePanierParCommande);
        setDataMoyennePanierParCommande(responseMoyennePanierParCommande.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const [dataRepartitionArticleParSousCategorie, setDataRepartitionArticleParSousCategorie] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseRepartitionArticleParSousCategorie = await axios.get('http://localhost:9000/api/v1/article/getRepartitionArticleParSousCategorie');

        setDataRepartitionArticleParSousCategorie(responseRepartitionArticleParSousCategorie.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const [dataSommeVenteParMois, setDataSommeVenteParMois] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSommeVenteParMois = await axios.get('http://localhost:9000/api/v1/detailCommande/getSommeVenteParMois');

        setDataSommeVenteParMois(responseSommeVenteParMois.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const [dataSommeVenteParVille, setDataSommeVenteParVille] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSommeVenteParVille = await axios.get('http://localhost:9000/api/v1/detailCommande/getSommeVenteParVille');
        console.log(responseSommeVenteParVille.data);
        
        setDataSommeVenteParVille(responseSommeVenteParVille.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


const [dataCAGR, setDataCAGR] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCAGR = await axios.get('http://localhost:9000/api/v1/article/getCAGR');
        console.log(responseCAGR.data);
        
        setDataCAGR(responseCAGR.data);
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
                          <Stack spacing={2} > 
                            <Stack spacing={2} direction="row">
                                <Card sx={{minWidth: 60 + "%", height: 177 }}>
                                  <Stack spacing={2}>
                                    <CardContent>
                                            <div className="iconstyle">
                                              <CreditCardIcon style={{fontSize:30}}/>
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                  <CountUp start={0} end={dataProfit} duration={3} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                  Somme des profits
                                            </Typography>
                                    </CardContent>                                              
                                  </Stack>
                                </Card>
                                <Card sx={{minWidth: 60 + "%", height: 177}}>
                                  <Stack spacing={2}>
                                      <CardContent>
                                            <div className="iconstyle">
                                                    <CreditCardIcon style={{fontSize:30}}/>
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                  <CountUp start={0} end={dataNbTotalVente} duration={3} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                  Nombre totale de Ventes
                                            </Typography>
                                      </CardContent>
                                  </Stack>
                                </Card>
                            </Stack>
                            <Stack spacing={2} direction="row">
                                <Card sx={{minWidth: 60 + "%", height: 177}}>
                                  <Stack spacing={2}>
                                      <CardContent>
                                      <div className="iconstyle">
                                              <CreditCardIcon style={{fontSize:30}}/>
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                  <CountUp start={0} end={dataSommeTotalVente} duration={3} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                  Somme total des ventes
                                            </Typography>
                                      </CardContent>
                                      
                                  </Stack>
                                </Card>
                                <Card sx={{minWidth: 60 + "%", height: 177}}>                                  
                                  <Stack spacing={2}>
                                      <CardContent>
                                            <div className="iconstyle">
                                              <CreditCardIcon style={{fontSize:30}}/>
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                  <CountUp start={0} end={dataMoyennePanierParCommande} duration={3} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                  Moyenne pannier par commande
                                            </Typography>
                                      </CardContent>
                                      
                                  </Stack>
                                </Card>
                            </Stack>
                          </Stack>
                        </Grid>
                        <Grid item xs={8} >
                          <Stack spacing={6} marginLeft={14} direction="row">
                              <Card sx={{width: 800 , height: 370}}>
                                <Stack spacing={2}>
                                    
                                    <CardContent>
                                      <LineChart />
                                    </CardContent>
                                </Stack>
                              </Card> 
                          </Stack>
                        </Grid> 
                  
                </Grid>



              <Box height={20}/>

              <Grid container spacing={2} direction="row">
                
                  <Grid item xs={6}>
                        <Card sx={{  height: 40 + "vh" }}>  
                              <CardContent>
                              <Table1  dataCAGR={dataCAGR}/>
                              </CardContent>
                        </Card>
                  </Grid>
                  <Grid item xs={6}>
                        <Card sx={{ height: 40 + "vh" }}>  
                              <CardContent>
                              <TableTauxConversion/>
                              </CardContent>
                        </Card>
                  </Grid>
                  <Box height={20}/>
                  <Grid item xs={12}>
                        <Card sx={{ height: 60 + "vh" }}>  
                        <CardContent>
                                <Bar2 dataSommeVenteParMois={dataSommeVenteParMois}>
                                
                                </Bar2>
                        </CardContent>
                            
                        </Card>
                  </Grid>
                  
              </Grid> 
              <Grid container spacing={2}>
                <Grid item xs={6}>
                      <Card sx={{ height: 60 + "vh" }}>  
                            <ColumnChart1 dataRepartitionArticleParSousCategorie={dataRepartitionArticleParSousCategorie}> 
                            
                            </ColumnChart1>
                      </Card>
                </Grid>
                
                <Grid item xs={6}>
                    <Card sx={{ height: 60 + "vh" }}> 
                      <CardContent>
                          <TableTauxRetention/>
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


