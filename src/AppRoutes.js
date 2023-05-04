// import React, { lazy } from "react";
import { Routes, Route, redirect } from "react-router-dom";

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

const isAuthenticated = false; // Replace this with your authentication state

const AppRotas = () => (
  <Routes>
    <Route path="/Login" element={<Login />}></Route>

    <Route path="/" element={isAuthenticated ? <Temporada /> : redirect("/Login")}></Route>
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
);

export default AppRotas;
