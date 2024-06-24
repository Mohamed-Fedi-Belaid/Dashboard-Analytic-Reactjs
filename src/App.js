import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import VenteRevenue from './pages/VenteRevenue';
import InventairePoduit from './pages/InventairePoduit';
import CommandeActivite from './pages/CommandeActivite';
import PromotionProduction from './pages/PromotionProduction';
import ClassificationArticle from './pages/ClassificationArticle';
import TunisiaMap from './charts/MapContainer';
function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setAuthenticated(!!token);

    const handleStorageChange = (event) => {
      if (event.key === 'token') {
        setAuthenticated(!!event.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    // Clear both localStorage and sessionStorage
    localStorage.removeItem('token');
    sessionStorage.clear();
    setAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/DataChart" element={<TunisiaMap />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={authenticated ? <Navigate to="/VenteRevenue" /> : <Login />}
        />
        <Route
          path="/VenteRevenue"
          element={authenticated ? <VenteRevenue /> : <Navigate to="/login" />}
        />
        <Route
          path="/InventairePoduit"
          element={authenticated ? <InventairePoduit /> : <Navigate to="/login" />}
        />
        <Route
          path="/CommandeActivite"
          element={authenticated ? <CommandeActivite /> : <Navigate to="/login" />}
        />
        <Route
          path="/PromotionProduction"
          element={authenticated ? <PromotionProduction /> : <Navigate to="/login" />}
        />
        <Route
          path="/ClassificationArticle"
          element={authenticated ? <ClassificationArticle /> : <Navigate to="/login" />}
        />
      </Routes>
      {authenticated && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </BrowserRouter>
  );
}

export default App;