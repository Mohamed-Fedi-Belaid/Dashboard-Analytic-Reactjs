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
export default function InventairePoduit() {
  
 


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


  const [dataNbClient, setDataNbClient] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbClient = await axios.get('http://localhost:9000/api/v1/pdv/count');
        console.log(responseNbClient);
        setDataNbClient(responseNbClient.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [dataNbFournisseur, setDataNbFournisseur] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbFournisseur = await axios.get('http://localhost:9000/api/v1/fournisseur/count');
        console.log(responseNbFournisseur.data);
        setDataNbFournisseur(responseNbFournisseur.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const [dataNbTotalArticle, setDataNbTotalArticle] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbTotalArticle = await axios.get('http://localhost:9000/api/v1/article/count');
        console.log(responseNbTotalArticle);
        setDataNbTotalArticle(responseNbTotalArticle.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const [dataNbTotalArticleDisponible, setDataNbTotalArticleDisponible] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbTotalArticleDisponible = await axios.get('http://localhost:9000/api/v1/article/count/disponible');
        console.log(responseNbTotalArticleDisponible);
        setDataNbTotalArticleDisponible(responseNbTotalArticleDisponible.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 

  const [dataMeilleurFournisseur, setDataMeilleurFournisseur] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseMeilleurFournisseur = await axios.get('http://localhost:9000/api/v1/fournisseur/MeilleurFournisseur');
        console.log(responseMeilleurFournisseur.data);
        setDataMeilleurFournisseur(responseMeilleurFournisseur.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [dataTopProduitVendu, setDataTopProduitVendu] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTopProduitVendu = await axios.get('http://localhost:9000/api/v1/article/getTopProduitVendue');
        console.log(responseTopProduitVendu.data);
        setDataTopProduitVendu(responseTopProduitVendu.data);
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
                            <Stack spacing={2}  direction="row"   > 
                              
                                  <Card sx={{minWidth:74 + "%", height: 177 }} >
                                    <Stack spacing={6} marginLeft={2}>
                                      <CardContent>
                                              <div className="iconstyle">
                                                <CreditCardIcon style={{fontSize:30}}/>
                                              </div>
                                              <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                    <CountUp start={0} end={dataNbClient} duration={3} />
                                              </Typography>
                                              <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                    Nombre de Commercants
                                              </Typography>
                                               
                                      </CardContent>                                              
                                    </Stack>
                                  </Card>
                                  <Card sx={{minWidth: 74 + "%", height: 177}} >
                                    <Stack spacing={6} marginLeft={2}>
                                        <CardContent>
                                              <div className="iconstyle">
                                                      <CreditCardIcon style={{fontSize:30}}/>
                                              </div>
                                              <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                    <CountUp start={0}  end={dataNbFournisseur} duration={3} />
                                              </Typography>
                                              <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                    Nombre de Fournisseurs
                                              </Typography>
                                        </CardContent>
                                    </Stack>
                                  </Card>
                              
                              
                                  <Card sx={{minWidth: 74 + "%", height: 177}}>
                                    <Stack spacing={2} marginLeft={2}>
                                        <CardContent>
                                        <div className="iconstyle">
                                                <CreditCardIcon style={{fontSize:30}}/>
                                              </div>
                                              <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                    <CountUp start={0} end={dataNbTotalArticle}  duration={3} />
                                              </Typography>
                                              <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                    Nombre total d'article
                                              </Typography>
                                        </CardContent>
                                        
                                    </Stack>
                                  </Card>
                                  <Card sx={{minWidth: 74 + "%", height: 177}}>                                  
                                    <Stack spacing={2} marginLeft={8}>
                                        <CardContent>
                                              <div className="iconstyle">
                                                <CreditCardIcon style={{fontSize:30}}/>
                                              </div>
                                              <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                    <CountUp start={0} end={dataNbTotalArticleDisponible}  duration={3} />
                                              </Typography>
                                              <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                    Nombre total d'article disponible 
                                              </Typography>
                                        </CardContent>
                                        
                                    </Stack>
                                  </Card>
                           
                            </Stack>
                          </Grid>
                          
                    
                </Grid>

                <Box height={20}/>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                          <Card sx={{ height: 75 + "vh" }}>  
                                <CardContent>
                                  
                                </CardContent>
                          </Card>
                    </Grid>
                    <Grid item xs={6}>
                          <Card sx={{ height: 75 + "vh" }}>  
                                <CardContent>
                                  
                                </CardContent>
                          </Card>
                    </Grid> 
                  </Grid> 
                  <Box height={20}/>


                  <Grid container spacing={2} >
                      
                      <Grid item xs={4} >
                        <Stack spacing={46}  direction="row"   > 
                          <Stack spacing={6} direction="row" >
                              <Card sx={{minWidth:147.5 + "%", height: 177 }} >
                                <Stack spacing={6} marginLeft={2}>
                                  <CardContent>
                                          <div className="iconstyle">
                                            <CreditCardIcon style={{fontSize:30}}/>
                                          </div>
                                          <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                <CountUp start={0}  duration={3} />
                                          </Typography>
                                          <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                Meilleur Commercant
                                          </Typography>
                                  </CardContent>                                              
                                </Stack>
                              </Card>
                              <Card sx={{minWidth: 147.5 + "%", height: 177}} >
                                <Stack spacing={6} marginLeft={2}>
                                    <CardContent>
                                          <div className="iconstyle">
                                                  <CreditCardIcon style={{fontSize:30}}/>
                                          </div>
                                          <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                <CountUp start={0}  end={dataMeilleurFournisseur? dataMeilleurFournisseur[0].article_count:""}  duration={3} /> Articles
                                          </Typography>
                                          <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                <div >
                                                   Le nom de fournisseur est :   {dataMeilleurFournisseur? dataMeilleurFournisseur[0].fournisseur_name:""} 
                                                  </div>
                                          </Typography>
                                          <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                Meilleur Fournisseurs
                                          </Typography>
                                    </CardContent>
                                </Stack>
                              </Card>
                          </Stack>
                          
                        </Stack>
                      </Grid>
                      
                
                  </Grid>






                  <Box height={20}/>

                 
                  <Grid container spacing={2}>
                  <Grid item xs={12} >
                        <Card sx={{ height: 30 + "vh" }}>  
                                    <CardContent>
                                          <div className="iconstyle">
                                                  <CreditCardIcon style={{fontSize:30}}/>
                                          </div>
                                          <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                <CountUp start={0}  end={dataTopProduitVendu? dataTopProduitVendu[0].num:""}  duration={3} /> est le nombre de vente
                                          </Typography>
                                          <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                <div >
                                                   Le nom de produit est :   {dataTopProduitVendu? dataTopProduitVendu[0].nom:""} 
                                                  </div>
                                          </Typography>
                                          <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                Top des produits vendues
                                          </Typography>
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


