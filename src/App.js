import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import AppRotas from "./AppRoutes";

import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

// 

import Login from "./Pages/Login";

import Temporada from "./Pages/Temporada/Temporada";
import Dados from "./Pages/Temporada/Dados";
import PreencherDadosMes from "./Pages/Temporada/PreencherDadosMes";

// Dispositivos
import Dispositivos from "./Pages/Dispositivos/Dispositivos";
import AvisosAtivos from "./Pages/Dispositivos/AvisosAtivos";

// Leaderboard
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import Instituicao from "./Pages/Leaderboard/Instituicao";

// Sugestoes
import Sugestoes from "./Pages/Sugestoes/Sugestoes";
import Sugestao from "./Pages/Sugestoes/Sugestao";
import CriarSugestao from "./Pages/Sugestoes/CriarSugestao";

// Trabalhadores
import Trabalhadores from "./Pages/Trabalhadores/Trabalhadores";
import Trabalhador from "./Pages/Trabalhadores/Trabalhador";

import Definicoes from "./Pages/Definicoes";
import PageNotFound from "./Pages/PageNotFound";

//

function App() {

  const isAuthenticated = false; // Replace this with your authentication state

  return (
    <Router>
      <Header />
      <Navbar />
      {/* <AppRotas /> */}
      <Routes>
    <Route path="/Login" element={<Login />}></Route>

    <Route path="/" element={isAuthenticated ? <Temporada /> : <Navigate to="/Login" />}></Route>
    <Route path="/Dados" element={<Dados />}></Route>
    <Route
      path="/PreencherDadosMes"
      element={<PreencherDadosMes />}
    ></Route>

    <Route path="/Dispositivos" element={<Dispositivos />}></Route>
    <Route path="/AvisosAtivos" element={<AvisosAtivos />}></Route>

    <Route path="/Leaderboard" element={<Leaderboard />}></Route>
    <Route path="/Instituicao" element={<Instituicao />}></Route>

    <Route path="/Sugestoes" element={<Sugestoes />}></Route>
    <Route path="/Sugestao" element={<Sugestao />}></Route>
    <Route path="/CriarSugestao" element={<CriarSugestao />}></Route>

    <Route path="/Trabalhadores" element={<Trabalhadores />}></Route>
    <Route path="/Trabalhador" element={<Trabalhador />}></Route>

    <Route path="/Definicoes" element={<Definicoes />}></Route>

    <Route path="*" element={<PageNotFound />}></Route>
  </Routes>
    </Router>
  );
}

export default App;
