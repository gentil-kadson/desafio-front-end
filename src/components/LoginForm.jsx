import React from 'react'
import './LoginForm.css'
import Logo from "../assets/images/logo.svg";
import { Link } from 'react-router-dom'

function LoginForm() {
    return(
        <form action="/dashboard" method="POST  ">
        <div id="image-container">
          <img src={Logo} alt="logo dashboard" />
        </div>

        <h1>Entrar na plataforma</h1>

        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <br />
          <input type="text" name="email" id="email" />
          <br />
        </div>

        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <br />
          <input type="text" name="password" id="password" />
          <br />
        </div>

        <Link to="/dashboard"><button className="login-button input-group">Entrar</button></Link>

        <a className="input-group" href="..." id="forgot-password">
          Esqueceu sua senha?
        </a>
      </form>
    );
}

export default LoginForm 