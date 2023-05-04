// import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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

// const Dispositivos = lazy(() => import("./Pages/Dispositivos/Dispositivos"));
// const Leaderboard = lazy(() => import("./Pages/Leaderboard/Leaderboard"));
// const Sugestoes = lazy(() => import("./Pages/Sugestoes/Sugestoes"));
// const Trabalhadores = lazy(() => import("./Pages/Trabalhadores/Trabalhadores"));

const AppRotas = () => {
  const isAuthenticated = true; // Replace this with your authentication state

  return (
    <Routes>
      <Route
        path="/Login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login />}
      ></Route>

      <Route
        path="/"
        element={isAuthenticated ? <Temporada /> : <Navigate to="/Login" />}
      ></Route>
      <Route
        path="/Dados"
        element={isAuthenticated ? <Dados /> : <Navigate to="/Login" />}
      ></Route>
      <Route
        path="/PreencherDadosMes"
        element={
          isAuthenticated ? <PreencherDadosMes /> : <Navigate to="/Login" />
        }
      ></Route>

      <Route
        path="/Dispositivos"
        element={isAuthenticated ? <Dispositivos /> : <Navigate to="/Login" />}
      ></Route>
      <Route
        path="/AvisosAtivos"
        element={isAuthenticated ? <AvisosAtivos /> : <Navigate to="/Login" />}
      ></Route>

      <Route
        path="/Leaderboard"
        element={isAuthenticated ? <Leaderboard /> : <Navigate to="/Login" />}
      ></Route>
      <Route
        path="/Instituicao"
        element={isAuthenticated ? <Instituicao /> : <Navigate to="/Login" />}
      ></Route>

      <Route
        path="/Sugestoes"
        element={isAuthenticated ? <Sugestoes /> : <Navigate to="/Login" />}
      ></Route>
      <Route
        path="/Sugestao"
        element={isAuthenticated ? <Sugestao /> : <Navigate to="/Login" />}
      ></Route>
      <Route
        path="/CriarSugestao"
        element={isAuthenticated ? <CriarSugestao /> : <Navigate to="/Login" />}
      ></Route>

      <Route
        path="/Trabalhadores"
        element={isAuthenticated ? <Trabalhadores /> : <Navigate to="/Login" />}
      ></Route>
      <Route
        path="/Trabalhador"
        element={isAuthenticated ? <Trabalhador /> : <Navigate to="/Login" />}
      ></Route>

      <Route
        path="/Definicoes"
        element={isAuthenticated ? <Definicoes /> : <Navigate to="/Login" />}
      ></Route>

      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default AppRotas;
