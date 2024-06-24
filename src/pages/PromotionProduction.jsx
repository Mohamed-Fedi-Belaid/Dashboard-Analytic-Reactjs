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
import { Table } from "../charts/Table";
import { TableFournisseur } from "../charts/TableFournisseur";
import MapContainer from "../charts/MapContainer";

export default function PromotionProduction() {
  const [dataProfit, setDataProfit] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseProfit = await axios.get(
          "http://localhost:9000/api/v1/article/getProfit"
        );
        console.log(responseProfit.data[0].profit);
        setDataProfit(responseProfit.data[0].profit);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [dataNbClient, setDataNbClient] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbClient = await axios.get(
          "http://localhost:9000/api/v1/pdv/count"
        );
        console.log(responseNbClient);
        setDataNbClient(responseNbClient.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [dataNbFournisseur, setDataNbFournisseur] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbFournisseur = await axios.get(
          "http://localhost:9000/api/v1/fournisseur/count"
        );
        console.log(responseNbFournisseur.data);
        setDataNbFournisseur(responseNbFournisseur.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [dataNbTotalArticle, setDataNbTotalArticle] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbTotalArticle = await axios.get(
          "http://localhost:9000/api/v1/article/count"
        );
        console.log(responseNbTotalArticle);
        setDataNbTotalArticle(responseNbTotalArticle.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [dataNbTotalArticleDisponible, setDataNbTotalArticleDisponible] =
    useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbTotalArticleDisponible = await axios.get(
          "http://localhost:9000/api/v1/article/count/disponible"
        );
        console.log(responseNbTotalArticleDisponible);
        setDataNbTotalArticleDisponible(responseNbTotalArticleDisponible.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [dataMeilleurFournisseur, setDataMeilleurFournisseur] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseMeilleurFournisseur = await axios.get(
          "http://localhost:9000/api/v1/fournisseur/MeilleurFournisseur"
        );
        console.log(responseMeilleurFournisseur.data);
        setDataMeilleurFournisseur(responseMeilleurFournisseur.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [dataTopProduitVendu, setDataTopProduitVendu] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTopProduitVendu = await axios.get(
          "http://localhost:9000/api/v1/article/getTopProduitVendue"
        );
        console.log(responseTopProduitVendu.data);
        setDataTopProduitVendu(responseTopProduitVendu.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [dataNbArticleVenduParSaison, setDataNbArticleVenduParSaison] =
    useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNbArticleVenduParSaison = await axios.get(
          "http://localhost:9000/api/v1/detailCommande/getNbArticleVenduParSaison"
        );
        console.log(responseNbArticleVenduParSaison.data);
        setDataNbArticleVenduParSaison(responseNbArticleVenduParSaison.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [
    dataRepartitionArticleParCategorie,
    setDataRepartitionArticleParCategorie,
  ] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseRepartitionArticleParCategorie = await axios.get(
          "http://localhost:9000/api/v1/article/getArticleCountByCategorie"
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
  }, []);

  const [dataSommeVenteParUser, setDataSommeVenteParUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSommeVenteParUser = await axios.get(
          "http://localhost:9000/api/v1/commande/getSumVenteParUser"
        );
        console.log(responseSommeVenteParUser.data);
        setDataSommeVenteParUser(responseSommeVenteParUser.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Stack spacing={2}>
              

              <Box height={20} />

              <Grid container spacing={2}>
              
                <Grid item xs={12}>
                  <Card sx={{ height: 75 + "vh" }}>
                    <CardContent>
                        <MapContainer/>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box height={20} />

              
              <Box height={20} />

            

              <Footer />
            </Stack>
          </Box>
        </Box>
      </div>
    </>
  );
}
