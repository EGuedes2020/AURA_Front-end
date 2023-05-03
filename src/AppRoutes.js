import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";

import Temporada from "./Pages/Temporada/Temporada";
import Dados from "./pages/Temporada/Dados";
import Preencher_Dados_Mes from "./pages/Temporada/Preencher_Dados_Mes";

// Dispositivos
import Avisos_Ativos from "./pages/Dispositivos/Avisos_Ativos";

// Leaderboard
import Instituicao from "./pages/Leaderboard/Instituicao";

// Sugestoes
import Sugestao from "./pages/Sugestoes/Sugestao";
import Criar_Sugestao from "./pages/Sugestoes/Criar_Sugestao";

// Trabalhadores
import Trabalhador from "./pages/Trabalhadores/Trabalhador";

import Definicoes from "./Pages/Definicoes";
import PageNotFound from "./Pages/PageNotFound";

const Dispositivos = lazy(() => import("./Pages/Dispotivos/Dispotivos"));
const Leaderboard = lazy(() => import("./Pages/Leaderboard/Leaderboard"));
const Sugestoes = lazy(() => import("./Pages/Sugestoes/Sugestoes"));
const Trabalhadores = lazy(() => import("./Pages/Trabalhadores/Trabalhadores"));

const AppRotas = () => (
  <Routes>
    <Route path="/Login" element={<Login />}></Route>

    <Route path="/" element={<Temporada />}></Route>
    <Route path="/Dados" element={<Dados />}></Route>
    <Route
      path="/Preencher_Dados_Mes"
      element={<Preencher_Dados_Mes />}
    ></Route>

    <Route path="/Dispositivos" element={<Dispositivos />}></Route>
    <Route path="/Avisos_Ativos" element={<Avisos_Ativos />}></Route>

    <Route path="/Leaderboard" element={<Leaderboard />}></Route>
    <Route path="/Instituicao" element={<Instituicao />}></Route>

    <Route path="/Sugestoes" element={<Sugestoes />}></Route>
    <Route path="/Sugestao" element={<Sugestao />}></Route>
    <Route path="/Criar_Sugestao" element={<Criar_Sugestao />}></Route>

    <Route path="/Trabalhadores" element={<Trabalhadores />}></Route>
    <Route path="/Trabalhador" element={<Trabalhador />}></Route>

    <Route path="/Definicoes" element={<Definicoes />}></Route>

    <Route path="*" element={<PageNotFound />}></Route>
  </Routes>
);

export default AppRotas;
