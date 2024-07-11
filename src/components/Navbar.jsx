import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../src/assets/Digidis.PNG";
import { useAppStore } from "../appStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppBar = styled(
    MuiAppBar,
    {}
)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
}));

export default function Navbar({ handleSdate, handleEdate,sdate,edate }) {
    const { updateOpen, dopen } = useAppStore();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{ backgroundColor: "#ffffff", color: "#2f2f2f" }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={() => updateOpen(!dopen)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        <img
                            src={logo}
                            style={{ height: "75px", width: "200px" }}
                            alt="logo"
                        />
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    {/* Move DatePicker to the left */}
                    <Toolbar sx={{ marginLeft: "auto" }}>
                        Du 

                        <DatePicker
                            selected={new Date(sdate)}
                            onChange={(date) => handleSdate(date)}
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                            style={{ marginLeft: "10px" }} // Adjust left margin as needed
                        />
                        Au

                        <DatePicker
                            selected={new Date(edate)}
                            onChange={(date) => handleEdate(date)}
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                            style={{ marginLeft: "10px" }} // Adjust left margin as needed
                        />
                    </Toolbar>

                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <Link
                            to="/login"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={() => {
                                    localStorage.removeItem("token");
                                }}
                            >
                                <LogoutIcon />
                            </IconButton>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}