import { LoginPage } from "../styles/Components/S_Login";
import {
  LoginContainer,
  LoginForms,
} from "../styles/Components/S_LoginContainer";
import { Btn } from "../styles/elements/Button";

import LoginAssetTopRight from "../Assets/LoginAssetTopRight.svg";
import LoginAssetBotLeft from "../Assets/LoginAssetBotLeft.svg";
import Logo from "../Assets/Logo.svg";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import axios from "axios";

import VisionIcon from "../Assets/Icons/Vision_icon.svg";
import NoVisionIcon from "../Assets/Icons/NoVision_icon.svg";

import {
  setToken,
  setInstitution,
  setWorker_id,
} from "../redux/LoginStateReducer_Slice";

function Login() {
  const dispatch = useDispatch();

  /* const fetch = async (url) => {
    return await axios.get(url);
  };

  useEffect(() => {
    fetch("https://aura-app.onrender.com/api/institutions").then((res) =>
      console.log(res.data)
    );
  }, []); */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [InputType, setInputType] = useState("password");
  const [InputState, setInputState] = useState(false);
  const [InputSVG, setInputSVG] = useState(NoVisionIcon);

  const PasswordState = () => {
    if (!InputState) {
      setInputSVG(VisionIcon);
      setInputType("text");
      setInputState(true);
    } else {
      setInputSVG(NoVisionIcon);
      setInputType("password");
      setInputState(false);
    }
  };

  function getCookie(cookieName) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName + "=")) {
        return cookie.substring(cookieName.length + 1);
      }
    }
    //return "";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://aura-app.onrender.com/api/login",
        { email, password }
      );
      console.log(response.data);
      if (response.data.token) {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        var expires = expirationDate.toUTCString();
        document.cookie =
          "Token=" + response.data.token + "; expires=" + expires + ";";
        document.cookie =
          "institution_id=" +
          response.data.institution_id +
          "; expires=" +
          expires +
          ";";
        document.cookie =
          "worker_id=" + response.data.worker_id + "; expires=" + expires + ";";

        dispatch(setToken(getCookie("Token")));
        dispatch(setInstitution(getCookie("Institution_id")));
        dispatch(setWorker_id(getCookie("worker_id")));
      }
      // Handle response as needed
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };

  return (
    <LoginPage>
      <img src={LoginAssetTopRight} alt="Login_Asset_Top_Right" />
      <LoginContainer>
        <img src={Logo} alt="Logo_AURA" />
        <LoginForms onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <div>
            <img
              src={InputSVG}
              alt="view_password"
              onClick={() => PasswordState()}
            />
            <input
              type={InputType}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <Link to="/RecuperarConta">
            <span>Esqueceu a password?</span>
          </Link>
          <Btn variant="3" type="submit">
            Entrar
          </Btn>
        </LoginForms>
      </LoginContainer>
      <img src={LoginAssetBotLeft} alt="Login_Asse_Bot_Left" />
    </LoginPage>
  );
}

export default Login;
