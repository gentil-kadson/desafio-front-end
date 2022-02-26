import React from 'react'
import './LoginForm.css'
import Logo from "../assets/images/logo.svg";
import { Link } from 'react-router-dom'

function LoginForm() {
  // const userEmail = useRef()
  // const userPassword = useRef()

  // async function submitHandler(e) {
  //   e.preventDefault() 

  //   const finalEmail = userEmail.current.value 
  //   const finalPassword = userPassword.current.value 
    
  //   const data = {
  //     email: finalEmail,
  //     password: finalPassword
  //   }

  //   const finalData = await fetch('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/login', {
  //     method: 'POST',
  //     body: JSON.stringify(data)
  //   }).then(response => response.json())
  //   .then(data => data)

  //   setAuthenticated(true)
  //   console.log(finalData)

  // }

  return(
      <form>
        <div id="image-container">
          <img src={Logo} alt="logo dashboard" />
        </div>

        <h1>Entrar na plataforma</h1>

        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <br />
          <input type="text" name="email" id="email"/>
          <br />
        </div>

        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <br />
          <input type="text" name="password" id="password"/>
          <br />
        </div>

        <Link to='/graphics'>
          <button className="login-button input-group">Entrar</button>
        </Link>
        

        <a className="input-group" href="..." id="forgot-password">
          Esqueceu sua senha?
        </a>
      </form>
    );
}

export default LoginForm 