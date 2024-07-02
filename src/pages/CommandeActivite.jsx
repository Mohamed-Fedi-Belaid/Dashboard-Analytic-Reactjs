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
import { TableAOV } from '../charts/TableAOV';
export default function CommandeActivite() {
  
 

  const [dataNbTotalCommandeValide, setDataNbTotalCommandeValide] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbTotalCommandeValide = await axios.get('http://localhost:9000/api/v1/commande/countAll');
        console.log(responseNbTotalCommandeValide.data);
        setDataNbTotalCommandeValide(responseNbTotalCommandeValide.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const [dataAOV, setDataAOV] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAOV = await axios.get('http://localhost:9000/api/v1/detailCommande/getAOV');
        console.log(responseAOV.data);
        setDataAOV(responseAOV.data[1].AOV);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const [dataTauxAbondonnePanier, setDataTauxAbondonnePanier] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTauxAbondonnePanier = await axios.get('http://localhost:9000/api/v1/detailCommande/getTauxAbondonPanier');
        console.log(responseTauxAbondonnePanier.data);
        setDataTauxAbondonnePanier(responseTauxAbondonnePanier.data[0].taux_abandon_panier);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const [dataTauxRetour, setDataTauxRetour] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTauxRetour = await axios.get('http://localhost:9000/api/v1/detailCommande/getTauxRetour');
        console.log(responseTauxRetour.data);
        setDataTauxRetour(responseTauxRetour.data[0].taux_retour);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const [dataTauxReachat, setDataTauxReachat] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTauxReachat = await axios.get('http://localhost:9000/api/v1/detailCommande/getTauxReachat');
        console.log(responseTauxReachat.data);
        setDataTauxReachat(responseTauxReachat.data[0].taux_reachat);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

 
  const [dataNbTotalCommande, setDataNbTotalCommande] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbTotalCommande = await axios.get('http://localhost:9000/api/v1/commande/totalCommand');
        console.log(responseNbTotalCommande.data);
        setDataNbTotalCommande(responseNbTotalCommande.data[0].nb_commandes);
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
        const responseNbCategorie = await axios.get('http://localhost:9000/api/v1/categorie/count');
        console.log(responseNbCategorie.data);
        setDataNbCategorie(responseNbCategorie.data);
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
  

  const [dataArticleCountByCategory, setDataArticleCountByCategory] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseArticleCountByCategory = await axios.get('http://localhost:9000/api/v1/article/getArticleCountByCategorie');
        console.log(responseArticleCountByCategory.data);
        setDataArticleCountByCategory(responseArticleCountByCategory.data);
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
                            <Stack spacing={2} direction="row" >
                                <Card sx={{minWidth: 100 + "%"  , height: 30 + "vh" }}>
                                  <Stack spacing={2} >
                                    <CardContent>
                                            <div className="iconstyle">
                                              <CreditCardIcon style={{fontSize:30}}/>
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                  <CountUp start={0} end={dataNbTotalCommande}  duration={3} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                  Nombre total des commande
                                            </Typography>
                                    </CardContent>                                  
                                  </Stack>
                                </Card>
                                <Card sx={{minWidth: 100 + "%"  , height: 30 + "vh" }}>
                                  <Stack spacing={2} margin={2} >
                                      <CardContent>
                                                <div className="iconstyle">
                                                  <CreditCardIcon style={{fontSize:30}}/>
                                                </div>
                                                <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                      <CountUp start={0} end={dataNbTotalCommandeValide} duration={3} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                      Nombre de commande validé
                                                </Typography>
                                      </CardContent>  
                                  </Stack>
                                </Card>
                                
                                <Card sx={{minWidth: 100 + "%"  , height: 30 + "vh" }}>
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
                                <Card sx={{minWidth: 153 + "%", height: 50 + "vh" }}>  
                                      <CardContent>
                                        <ColumnChart dataNbVenteParCategorie={dataNbVenteParCategorie}/>
                                      </CardContent>
                                </Card>
                          </Grid>
                           
                     
                    </Grid> 
                    <Box height={20}/>
                 
               
                    
                    <Grid container spacing={2} direction={'row'}>
                     
                      <Grid item xs={8}>
                                <Card sx={{minWidth: 100 + "%"  , height: 60 + "vh" }}>  
                                      <CardContent>
                                        <PieChart dataArticleCountByCategory={dataArticleCountByCategory} />
                                      </CardContent>
                                </Card>
                      </Grid>
                      <Grid item xs={4}>
                                <Card sx={{minWidth: 100 + "%"  , height: 60 + "vh" }}>  
                                      <CardContent>
                                        <TableAOV apiUrl="http://localhost:9000/api/v1/detailCommande/getAOV" />
                                      </CardContent>
                                </Card>
                      </Grid>
                    </Grid> 
                    <Grid container spacing={2} direction={'row'}>
                     
                     <Grid item xs={4}>
                               <Card sx={{minWidth: 100 + "%"  , height: 30 + "vh" }}>  
                                     <CardContent>
                                               
                                                <div className="iconstyle">
                                                  <CreditCardIcon style={{fontSize:30}}/>
                                                </div>
                                                <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                Taux d'Abandon de Panier %

                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                      <CountUp 
                                                      start={0} 
                                                      end={dataTauxAbondonnePanier}
                                                      duration={3} 
                                                      decimals={4} // Indiquez ici le nombre de décimales à afficher
                                                      />
                                                </Typography>
                              

                                     </CardContent>
                               </Card>
                      </Grid>
                      <Grid item xs={4}>
                               <Card sx={{minWidth: 100 + "%"  , height: 30 + "vh" }}>  
                                     <CardContent>
                                               
                                                <div className="iconstyle">
                                                  <CreditCardIcon style={{fontSize:30}}/>
                                                </div>
                                                <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                Taux de Retour %


                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                      <CountUp 
                                                      start={0} 
                                                      end={dataTauxRetour}
                                                      duration={3}
                                                      decimals={4} 
                                                      />
                                                </Typography>
                              

                                     </CardContent>
                               </Card>
                      </Grid>
                      <Grid item xs={4}>
                               <Card sx={{minWidth: 100 + "%"  , height: 30 + "vh" }}>  
                                     <CardContent>
                                       
                                                <div className="iconstyle">
                                                  <CreditCardIcon style={{fontSize:30}}/>
                                                </div>
                                                <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                                                Taux de Réachat %



                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
                                                      <CountUp 
                                                      start={0} 
                                                      end={dataTauxReachat}
                                                      duration={3}
                                                      decimals={4} 
                                                      />
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


