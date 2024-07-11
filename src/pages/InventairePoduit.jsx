import React from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import DrawerHeader from "../components/Sidenav";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import "../Dashboard.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { colors } from "@mui/material";
import BarChart from "../charts/BarChart";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import axios from "axios";
import GeoChart from "../charts/GeoChart";
import Footer from "../components/Footer";
import { LineChart } from "../charts/LineChart";
import { Bar } from "../charts/Bar";
import { Bar1 } from "../charts/Bar1";
import { Bar3 } from "../charts/Bar3";
import { Table } from "../charts/Table";
import { TableFournisseur } from "../charts/TableFournisseur";

export default function InventairePoduit() {
  const [dataProfit, setDataProfit] = useState(null);
  

  const getInitialStartDate = () => {
    const savedStartDate = localStorage.getItem('startDate');
    return savedStartDate ? savedStartDate : new Date('2020-01-01').toISOString().substring(0, 10);
};

const getInitialEndDate = () => {
    const savedEndDate = localStorage.getItem('endDate');
    return savedEndDate ? savedEndDate : new Date().toISOString().substring(0, 10);
};

const [startDate, setStartDate] = useState(getInitialStartDate);
const [endDate, setEndDate] = useState(getInitialEndDate);

// Save to local storage whenever startDate or endDate changes
useEffect(() => {
    localStorage.setItem('startDate', startDate);
}, [startDate]);

useEffect(() => {
    localStorage.setItem('endDate', endDate);
}, [endDate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseProfit = await axios.get(
          "http://localhost:9000/api/v1/article/getProfit"
        );
        console.log(responseProfit?.data?.[0]?.profit);
        setDataProfit(responseProfit?.data?.[0]?.profit);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [, startDate, endDate]);

  const [dataNbClient, setDataNbClient] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbClient = await axios.get(
          "http://localhost:9000/api/v1/pdv/count?startDate="+startDate+"&endDate="+endDate
        );
        console.log(responseNbClient);
        setDataNbClient(responseNbClient.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [, startDate, endDate]);

  const [dataNbFournisseur, setDataNbFournisseur] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbFournisseur = await axios.get(
          "http://localhost:9000/api/v1/fournisseur/count?startDate="+startDate+"&endDate="+endDate
        );
        console.log(responseNbFournisseur.data);
        setDataNbFournisseur(responseNbFournisseur.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [, startDate, endDate]);

  const [dataNbTotalArticle, setDataNbTotalArticle] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbTotalArticle = await axios.get(
          "http://localhost:9000/api/v1/article/count?startDate="+startDate+"&endDate="+endDate
        );
        console.log(responseNbTotalArticle);
        setDataNbTotalArticle(responseNbTotalArticle.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [, startDate, endDate]);

  const [dataNbTotalArticleDisponible, setDataNbTotalArticleDisponible] =
    useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbTotalArticleDisponible = await axios.get(
          "http://localhost:9000/api/v1/article/count/disponible?startDate="+startDate+"&endDate="+endDate
        );
        console.log(responseNbTotalArticleDisponible);
        setDataNbTotalArticleDisponible(responseNbTotalArticleDisponible.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [, startDate, endDate]);

  const [dataMeilleurFournisseur, setDataMeilleurFournisseur] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseMeilleurFournisseur = await axios.get(
          "http://localhost:9000/api/v1/fournisseur/MeilleurFournisseur?startDate="+startDate+"&endDate="+endDate
        );
        console.log(responseMeilleurFournisseur.data);
        setDataMeilleurFournisseur(responseMeilleurFournisseur.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [, startDate, endDate]);

  const [dataTopProduitVendu, setDataTopProduitVendu] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTopProduitVendu = await axios.get(
          "http://localhost:9000/api/v1/article/getTopProduitVendue?startDate="+startDate+"&endDate="+endDate
        );
        console.log(responseTopProduitVendu.data);
        setDataTopProduitVendu(responseTopProduitVendu.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [, startDate, endDate]);

  const [dataNbArticleVenduParSaison, setDataNbArticleVenduParSaison] =
    useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbArticleVenduParSaison = await axios.get(
          "http://localhost:9000/api/v1/detailCommande/getNbArticleVenduParSaison?startDate="+startDate+"&endDate="+endDate
        );
        console.log(responseNbArticleVenduParSaison.data);
        setDataNbArticleVenduParSaison(responseNbArticleVenduParSaison.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [, startDate, endDate]);

  const [
    dataRepartitionArticleParCategorie,
    setDataRepartitionArticleParCategorie,
  ] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseRepartitionArticleParCategorie = await axios.get(
          "http://localhost:9000/api/v1/article/getArticleCountByCategorie?startDate="+startDate+"&endDate="+endDate
        );
        console.log(responseRepartitionArticleParCategorie.data);
        setDataRepartitionArticleParCategorie(
          responseRepartitionArticleParCategorie.data
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [, startDate, endDate]);

  const [dataSommeVenteParUser, setDataSommeVenteParUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSommeVenteParUser = await axios.get(
          "http://localhost:9000/api/v1/commande/getSumVenteParUser?startDate="+startDate+"&endDate="+endDate
        );
        console.log(responseSommeVenteParUser.data);
        setDataSommeVenteParUser(responseSommeVenteParUser.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [, startDate, endDate]);
  

   const handleSetStartDate = (date) => {
        const mdate = date.toString().split(' ');
        const newDate = `${mdate[1]} ${mdate[2]} ${mdate[3]}`;
        const creDate = new Date(newDate);
        const formattedDate = creDate.toISOString().substring(0, 10);
        setStartDate(formattedDate);
        console.log(formattedDate);
    };

    const handleSetEndDate = (date) => {
        const mdate = date.toString().split(' ');
        const newDate = `${mdate[1]} ${mdate[2]} ${mdate[3]}`;
        const creDate = new Date(newDate);
        const formattedDate = creDate.toISOString().substring(0, 10);
        setEndDate(formattedDate);
        console.log(formattedDate);
    };

  return (
    <>
      <div className="bgcolor">
        <Navbar 
          handleSdate={handleSetStartDate}
          handleEdate={handleSetEndDate}
          sdate={startDate}
          edate={endDate}
        />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Stack spacing={2}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Stack spacing={2} direction="row">
                    <Card sx={{ minWidth: 74 + "%", height: 177 }}  className="gradient">
                      <Stack spacing={6} marginLeft={2}>
                        <CardContent>
                          <div className="iconstyle">
                            <CreditCardIcon style={{ fontSize: 30 }} />
                          </div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "#ccd1d1" }}
                          >
                            <CountUp
                              start={0}
                              end={dataNbClient}
                              duration={3}
                            />
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                            sx={{ color: "#ccd1d1" }}
                          >
                            Nombre de Commercants
                          </Typography>
                        </CardContent>
                      </Stack>
                    </Card>
                    <Card sx={{ minWidth: 74 + "%", height: 177 }}  className="gradient">
                      <Stack spacing={6} marginLeft={2}>
                        <CardContent>
                          <div className="iconstyle">
                            <CreditCardIcon style={{ fontSize: 30 }} />
                          </div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "#ccd1d1" }}
                          >
                            <CountUp
                              start={0}
                              end={dataNbFournisseur}
                              duration={3}
                            />
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                            sx={{ color: "#ccd1d1" }}
                          >
                            Nombre de Fournisseurs
                          </Typography>
                        </CardContent>
                      </Stack>
                    </Card>

                    <Card sx={{ minWidth: 74 + "%", height: 177 }}  className="gradient">
                      <Stack spacing={2} marginLeft={2}>
                        <CardContent>
                          <div className="iconstyle">
                            <CreditCardIcon style={{ fontSize: 30 }} />
                          </div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "#ccd1d1" }}
                          >
                            <CountUp
                              start={0}
                              end={dataNbTotalArticle}
                              duration={3}
                            />
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                            sx={{ color: "#ccd1d1" }}
                          >
                            Nombre total d'article
                          </Typography>
                        </CardContent>
                      </Stack>
                    </Card>
                    <Card sx={{ minWidth: 74 + "%", height: 177 }}  className="gradient">
                      <Stack spacing={2} marginLeft={8}>
                        <CardContent>
                          <div className="iconstyle">
                            <CreditCardIcon style={{ fontSize: 30 }} />
                          </div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "#ccd1d1" }}
                          >
                            <CountUp
                              start={0}
                              end={dataNbTotalArticleDisponible}
                              duration={3}
                            />
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                            sx={{ color: "#ccd1d1" }}
                          >
                            Nombre total d'article disponible
                          </Typography>
                        </CardContent>
                      </Stack>
                    </Card>
                  </Stack>
                </Grid>
              </Grid>

              <Box height={20} />

              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Card sx={{ height: 60 + "vh" }}>
                    <CardContent>
                      <Bar
                        dataNbArticleVenduParSaison={
                          dataNbArticleVenduParSaison
                        }
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={8}>
                  <Card sx={{ height: 60 + "vh" }}>
                    <CardContent>
                      <Bar1
                        dataRepartitionArticleParCategorie={
                          dataRepartitionArticleParCategorie
                        }
                      />
                    </CardContent>
                  </Card>
                </Grid>
                
              </Grid>



              <Box height={20} />

              <Grid container spacing={2}>
                
                <Grid item xs={12}>
                  <Card sx={{ height: 60 + "vh" }}>
                    <CardContent>
                      <Bar3
                        dataRepartitionArticleParCategorie={
                          dataRepartitionArticleParCategorie
                        }
                      />
                    </CardContent>
                  </Card>
                </Grid>
                
              </Grid>
              <Box height={20} />

              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Stack spacing={46} direction="row">
                    <Stack spacing={6} direction="row">
                      
                      <Card sx={{ minWidth: 68.1 + "%", height: 177 }}>
                        <Stack spacing={6} marginLeft={2}>
                          <Table
                            dataSommeVenteParUser={dataSommeVenteParUser}
                          />
                        </Stack>
                      </Card>
                      <Card sx={{ minWidth: 68.1 + "%", height: 177 }}>
                        <Stack spacing={6} marginLeft={2}>
                          <TableFournisseur 
                             dataMeilleurFournisseur={dataMeilleurFournisseur}
                          />
                        </Stack>
                      </Card>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>

              <Box height={20} />

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card sx={{ height: 30 + "vh" }}  className="gradient">
                    <CardContent>
                      <div className="iconstyle">
                        <CreditCardIcon style={{ fontSize: 30 }} />
                      </div>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Top des produits vendues
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        <CountUp
                          start={0}
                          end={
                            dataTopProduitVendu
                              ? dataTopProduitVendu?.[0]?.num
                              : ""
                          }
                          duration={3}
                        />{" "}
                        est le nombre de vente
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        <div>
                          Le nom de produit est :{" "}
                          {dataTopProduitVendu
                            ? dataTopProduitVendu?.[0]?.nom
                            : ""}
                        </div>
                      </Typography>
                     
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Footer />
            </Stack>
          </Box>
        </Box>
      </div>
    </>
  );
}
