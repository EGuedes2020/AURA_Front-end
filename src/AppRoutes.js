// import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./Pages/Login";
import Registo from "./Pages/Registo";
import RecuperarConta from "./Pages/RecuperarConta";
import MudarSenha from "./Pages/MudarSenha";

import Temporada from "./Pages/Temporada/Temporada";
import Dados from "./Pages/Temporada/Dados";
import PreencherDadosMes from "./Pages/Temporada/PreencherDadosMes";
import Conquistas from "./Pages/Temporada/Conquistas";

// Dispositivos
import Dispositivos from "./Pages/Dispositivos/Dispositivos";
import AvisosAtivos from "./Pages/Dispositivos/AvisosAtivos";
import Avisos from "./Pages/Dispositivos/Avisos";

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
import ConvidarTrabalhador from "./Pages/Trabalhadores/ConvidarTrabalhador";

// Extras
import Definicoes from "./Pages/Definicoes";
import GestaoDispositivos from "./Pages/GestaoDispositivos";

import PageNotFound from "./Pages/PageNotFound";

const AppRotas = () => {
  const isAuthenticated = useSelector((state) => state.Login.isAuthenticated);
  const Role = useSelector((state) => state.Login.Role);

  return (
    <Routes>
      <Route
        path="/Login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login />}
      ></Route>
      <Route
        path="/Registo"
        element={isAuthenticated ? <Navigate to="/" /> : <Registo />}
      ></Route>
      <Route
        path="/RecuperarConta"
        element={isAuthenticated ? <Navigate to="/" /> : <RecuperarConta />}
      ></Route>
      <Route
        path="/MudarSenha"
        element={isAuthenticated ? <Navigate to="/" /> : <MudarSenha />}
      ></Route>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            Role === "admin" ? (
              <Temporada />
            ) : (
              <Avisos />
            )
          ) : (
            <Navigate to="/Login" />
          )
        }
      ></Route>
      <Route
        path="/Temporada"
        element={isAuthenticated ? <Temporada /> : <Navigate to="/Login" />}
      ></Route>
      <Route
        path="/Dados"
        element={
          isAuthenticated ? (
            Role === "admin" ? (
              <Dados />
            ) : (
              <Avisos />
            )
          ) : (
            <Navigate to="/Login" />
          )
        }
      ></Route>
      <Route
        path="/PreencherDadosMes"
        element={
          isAuthenticated ? (
            Role === "admin" ? (
              <PreencherDadosMes />
            ) : (
              <Avisos />
            )
          ) : (
            <Navigate to="/Login" />
          )
        }
      ></Route>
      <Route
        path="/Conquistas"
        element={
          isAuthenticated ? (
            Role === "admin" ? (
              <Conquistas />
            ) : (
              <Avisos />
            )
          ) : (
            <Navigate to="/Login" />
          )
        }
      ></Route>
      <Route
        path="/Dispositivos"
        element={
          isAuthenticated ? (
            Role === "admin" ? (
              <Dispositivos />
            ) : (
              <Avisos />
            )
          ) : (
            <Navigate to="/Login" />
          )
        }
      ></Route>
      <Route
        path="/AvisosAtivos"
        element={
          isAuthenticated ? (
            Role === "admin" ? (
              <AvisosAtivos />
            ) : (
              <Avisos />
            )
          ) : (
            <Navigate to="/Login" />
          )
        }
      ></Route>
      <Route
        path="/Avisos"
        element={isAuthenticated ? <Avisos /> : <Navigate to="/Login" />}
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
        element={
          isAuthenticated ? (
            Role === "admin" ? (
              <Trabalhadores />
            ) : (
              <Avisos />
            )
          ) : (
            <Navigate to="/Login" />
          )
        }
      ></Route>
      <Route
        path="/Trabalhador"
        element={
          isAuthenticated ? (
            Role === "admin" ? (
              <Trabalhador />
            ) : (
              <Avisos />
            )
          ) : (
            <Navigate to="/Login" />
          )
        }
      ></Route>
      <Route
        path="/ConvidarTrabalhador"
        element={
          isAuthenticated ? (
            Role === "admin" ? (
              <ConvidarTrabalhador />
            ) : (
              <Avisos />
            )
          ) : (
            <Navigate to="/Login" />
          )
        }
      ></Route>
      <Route
        path="/Definicoes"
        element={isAuthenticated ? <Definicoes /> : <Navigate to="/Login" />}
      ></Route>
      <Route
        path="/GestaoDispositivos"
        element={
          isAuthenticated ? (
            Role === "admin" ? (
              <GestaoDispositivos />
            ) : (
              <Avisos />
            )
          ) : (
            <Navigate to="/Login" />
          )
        }
      ></Route>

      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default AppRotas;
