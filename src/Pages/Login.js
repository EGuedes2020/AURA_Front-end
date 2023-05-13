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

function Login() {
  return (
    <LoginPage>
      <img src={LoginAssetTopRight} alt="Login_Asset_Top_Right" />
      <LoginContainer>
        <img src={Logo} alt="Logo_AURA" />
        <LoginForms>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Senha"></input>
          <Link to="/Login">
            <span>Esqueceu a password?</span>
          </Link>
          <Link to="/Login">
            <Btn variant="3" type="submit">
              Entrar
            </Btn>
          </Link>
        </LoginForms>
      </LoginContainer>
      <img src={LoginAssetBotLeft} alt="Login_Asse_Bot_Left" />
    </LoginPage>
  );
}

export default Login;
