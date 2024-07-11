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
import { ColumnChart1 } from "../charts/ColumnCahrt1";
import TunisiaMap from "../charts/MapContainer";
import { Bar2 } from "../charts/Bar2";

import { Table1 } from "../charts/Table1";

import { TableTauxRetention } from "../charts/TableTauxRetention";
import { TableTauxConversion } from "../charts/TableTauxConversion";
export default function VenteRevenue() {
    const [dataProfit, setDataProfit] = useState(null);
    
    // Retrieve values from local storage or set default values
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
                console.log(startDate);
                console.log(endDate);
                const responseProfit = await axios.get(
                    "http://localhost:9000/api/v1/article/getProfit?startDate="+startDate+"&endDate="+endDate
                );
                console.log(responseProfit.data[0].profit);
                setDataProfit(responseProfit.data[0].profit);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [, startDate, endDate]);

    const [dataNbTotalVente, setDataNbTotalVente] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseNbTotalVente = await axios.get(
                    "http://localhost:9000/api/v1/commande/count?startDate="+startDate+"&endDate="+endDate
                );
                console.log(responseNbTotalVente);
                setDataNbTotalVente(responseNbTotalVente.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [, startDate, endDate]);

    const [dataSommeTotalVente, setDataSommeTotalVente] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseSommeTotalVente = await axios.get(
                    "http://localhost:9000/api/v1/commande/sum?startDate="+startDate+"&endDate="+endDate
                );
                console.log(responseSommeTotalVente);
                setDataSommeTotalVente(responseSommeTotalVente.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [, startDate, endDate]);

    const [dataMoyennePanierParCommande, setDataMoyennePanierParCommande] =
        useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseMoyennePanierParCommande = await axios.get(
                    "http://localhost:9000/api/v1/commande/sumDividedByCountAll?startDate="+startDate+"&endDate="+endDate
                );
                console.log( "http://localhost:9000/api/v1/commande/sumDividedByCountAll?startDate="+startDate+"&endDate="+endDate);
                console.log(responseMoyennePanierParCommande);
                setDataMoyennePanierParCommande(
                    responseMoyennePanierParCommande.data
                );
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [, startDate, endDate]);

    const [
        dataRepartitionArticleParSousCategorie,
        setDataRepartitionArticleParSousCategorie,
    ] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseRepartitionArticleParSousCategorie =
                    await axios.get(
                        "http://localhost:9000/api/v1/article/getRepartitionArticleParSousCategorie?startDate="+startDate+"&endDate="+endDate
                    );

                setDataRepartitionArticleParSousCategorie(
                    responseRepartitionArticleParSousCategorie.data
                );
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [, startDate, endDate]);

    const [dataSommeVenteParMois, setDataSommeVenteParMois] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseSommeVenteParMois = await axios.get(
                    "http://localhost:9000/api/v1/detailCommande/getSommeVenteParMois?startDate="+startDate+"&endDate="+endDate
                );

                setDataSommeVenteParMois(responseSommeVenteParMois.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [, startDate, endDate]);

    const [dataSommeVenteParVille, setDataSommeVenteParVille] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseSommeVenteParVille = await axios.get(
                    "http://localhost:9000/api/v1/detailCommande/getSommeVenteParVille"
                );
                console.log(responseSommeVenteParVille.data);

                setDataSommeVenteParVille(responseSommeVenteParVille.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [, startDate, endDate]);

    const [dataCAGR, setDataCAGR] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseCAGR = await axios.get(
                    "http://localhost:9000/api/v1/article/getCAGR"
                );
                console.log(responseCAGR.data);

                setDataCAGR(responseCAGR.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [, startDate, endDate]);

    const [dataCommandeCountByDayForLast3Years, setDataCommandeCountByDayForLast3Years] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseCommandeCountByDayForLast3Years = await axios.get(
                    "http://localhost:9000/api/v1/commande/getCommandeCountByDayForLast3Years?startDate="+startDate+"&endDate="+endDate
                );
                console.log(responseCommandeCountByDayForLast3Years.data);

                setDataCommandeCountByDayForLast3Years(responseCommandeCountByDayForLast3Years.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [, startDate, endDate]);

    const [dataRevenue, setDataRevenue] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseRevenue = await axios.get(
                    "http://localhost:9000/api/v1/detailCommande/getRevenue?startDate="+startDate+"&endDate="+endDate
                );
                console.log(responseRevenue.data[0].total_revenue);

                setDataRevenue(responseRevenue.data[0].total_revenue);
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
                                <Grid item xs={3}>
                                    <Stack spacing={2}>
                                        <Stack spacing={2} direction="row">
                                            <Card
                                                sx={{
                                                    minWidth: 60 + "%",
                                                    height: 177,
                                                }}
                                                className="gradient"
                                            >
                                                <Stack spacing={2}>
                                                    <CardContent>
                                                        <div className="iconstyle">
                                                            <CreditCardIcon
                                                                style={{
                                                                    fontSize: 30,
                                                                }}
                                                            />
                                                        </div>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h5"
                                                            component="div"
                                                            sx={{
                                                                color: "#ccd1d1",
                                                            }}
                                                        >
                                                            <CountUp
                                                                start={0}
                                                                end={dataProfit}
                                                                duration={3}
                                                            /> DT
                                                        </Typography>
                                                        <Typography
                                                            gutterBottom
                                                            variant="body2"
                                                            component="div"
                                                            sx={{
                                                                color: "#ccd1d1",
                                                            }}
                                                        >
                                                            Somme des profits
                                                        </Typography>
                                                    </CardContent>
                                                </Stack>
                                            </Card>
                                            <Card
                                                sx={{
                                                    minWidth: 60 + "%",
                                                    height: 177,
                                                }}
                                                 className="gradient"
                                            >
                                                <Stack spacing={2}>
                                                    <CardContent>
                                                        <div className="iconstyle">
                                                            <CreditCardIcon
                                                                style={{
                                                                    fontSize: 30,
                                                                }}
                                                            />
                                                        </div>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h5"
                                                            component="div"
                                                            sx={{
                                                                color: "#ccd1d1",
                                                            }}
                                                        >
                                                            <CountUp
                                                                start={0}
                                                                end={
                                                                    dataNbTotalVente
                                                                }
                                                                duration={3}
                                                            />
                                                        </Typography>
                                                        <Typography
                                                            gutterBottom
                                                            variant="body2"
                                                            component="div"
                                                            sx={{
                                                                color: "#ccd1d1",
                                                            }}
                                                        >
                                                            Nombre totale de
                                                            Ventes
                                                        </Typography>
                                                    </CardContent>
                                                </Stack>
                                            </Card>
                                            <Card
                                                sx={{
                                                    minWidth: 60 + "%",
                                                    height: 177,
                                                }}
                                                 className="gradient"
                                            >
                                                <Stack spacing={2}>
                                                    <CardContent>
                                                        <div className="iconstyle">
                                                            <CreditCardIcon
                                                                style={{
                                                                    fontSize: 30,
                                                                }}
                                                            />
                                                        </div>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h5"
                                                            component="div"
                                                            sx={{
                                                                color: "#ccd1d1",
                                                            }}
                                                        >
                                                            <CountUp
                                                                start={0}
                                                                end={
                                                                    dataRevenue
                                                                }
                                                                duration={3}
                                                            /> DT
                                                        </Typography>
                                                        <Typography
                                                            gutterBottom
                                                            variant="body2"
                                                            component="div"
                                                            sx={{
                                                                color: "#ccd1d1",
                                                            }}
                                                        >
                                                            Revenue
                                                        </Typography>
                                                    </CardContent>
                                                </Stack>
                                            </Card>
                                        </Stack>
                                        <Stack spacing={2} direction="row">
                                            <Card
                                                sx={{
                                                    minWidth: 60 + "%",
                                                    height: 177,
                                                }}
                                                 className="gradient"
                                            >
                                                <Stack spacing={2}>
                                                    <CardContent>
                                                        <div className="iconstyle">
                                                            <CreditCardIcon
                                                                style={{
                                                                    fontSize: 30,
                                                                }}
                                                            />
                                                        </div>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h5"
                                                            component="div"
                                                            sx={{
                                                                color: "#ccd1d1",
                                                            }}
                                                        >
                                                            <CountUp
                                                                start={0}
                                                                end={
                                                                    dataSommeTotalVente
                                                                }
                                                                duration={3}
                                                            /> DT
                                                        </Typography>
                                                        <Typography
                                                            gutterBottom
                                                            variant="body2"
                                                            component="div"
                                                            sx={{
                                                                color: "#ccd1d1",
                                                            }}
                                                        >
                                                            Somme total des
                                                            ventes
                                                        </Typography>
                                                    </CardContent>
                                                </Stack>
                                            </Card>
                                            <Card
                                                sx={{
                                                    minWidth: 60 + "%",
                                                    height: 177,
                                                }}
                                                 className="gradient"
                                            >
                                                <Stack spacing={2}>
                                                    <CardContent>
                                                        <div className="iconstyle">
                                                            <CreditCardIcon
                                                                style={{
                                                                    fontSize: 30,
                                                                }}
                                                            />
                                                        </div>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h5"
                                                            component="div"
                                                            sx={{
                                                                color: "#ccd1d1",
                                                            }}
                                                        >
                                                            <CountUp
                                                                start={0}
                                                                end={
                                                                    dataMoyennePanierParCommande
                                                                }
                                                                duration={3}
                                                            />
                                                        </Typography>
                                                        <Typography
                                                            gutterBottom
                                                            variant="body2"
                                                            component="div"
                                                            sx={{
                                                                color: "#ccd1d1",
                                                            }}
                                                        >
                                                            Moyenne pannier par
                                                            commande
                                                        </Typography>
                                                    </CardContent>
                                                </Stack>
                                            </Card>
                                            <Card
                                                sx={{
                                                    minWidth: 60 + "%",
                                                    height: 177,
                                                }}
                                                 className="gradient"
                                            >
                                                <Stack spacing={2}>
                                                    <CardContent>
                                                        <div className="iconstyle">
                                                            <CreditCardIcon
                                                                style={{
                                                                    fontSize: 30,
                                                                }}
                                                            />
                                                        </div>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h5"
                                                            component="div"
                                                            sx={{
                                                                color: "#ccd1d1",
                                                            }}
                                                        >
                                                            <CountUp
                                                                start={0}
                                                                end={
                                                                    dataMoyennePanierParCommande
                                                                }
                                                                duration={3}
                                                            />
                                                        </Typography>
                                                        <Typography
                                                            gutterBottom
                                                            variant="body2"
                                                            component="div"
                                                            sx={{
                                                                color: "#ccd1d1",
                                                            }}
                                                        >
                                                            Dépenses
                                                            
                                                        </Typography>
                                                    </CardContent>
                                                </Stack>
                                            </Card>
                                        </Stack>
                                    </Stack>
                                </Grid>
                                <Grid item xs={9}>
                                    <Stack
                                        spacing={6}
                                        marginLeft={35}
                                        direction="row"
                                    >
                                        <Card sx={{ width: 800, height: 370 }}  >
                                            <Stack spacing={2}>
                                                <CardContent>
                                                    <LineChart dataCommandeCountByDayForLast3Years={dataCommandeCountByDayForLast3Years} />
                                                </CardContent>
                                            </Stack>
                                        </Card>
                                    </Stack>
                                </Grid>
                            </Grid>

                            <Box height={20} />

                            <Grid container spacing={2} direction="row">
                                <Grid item xs={4}>
                                    <Card sx={{ height: 40 + "vh" }} >
                                        <CardContent>
                                            <Table1 dataCAGR={dataCAGR} />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card sx={{ height: 40 + "vh" }}  >
                                        <CardContent>
                                            <TableTauxConversion />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card sx={{ height: 40 + "vh" }}  >
                                        <CardContent>
                                            <TableTauxRetention />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Box height={20} />
                                <Grid item xs={12}>
                                    <Card sx={{ height: 60 + "vh" }}  >
                                        <CardContent>
                                            <Bar2
                                                dataSommeVenteParMois={
                                                    dataSommeVenteParMois
                                                }
                                            ></Bar2>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Card sx={{ height: 60 + "vh" }}  >
                                        <ColumnChart1
                                            dataRepartitionArticleParSousCategorie={
                                                dataRepartitionArticleParSousCategorie
                                            }
                                        ></ColumnChart1>
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