import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

import './Login.css';

function Login() {
  const [fields, setFields] = useState({
    email:'',
    password:''
  });
  const [adminData, setAdminData] = useState(false)

  //function login
  function login(e){
    e.preventDefault();
    const Form = new FormData();
    Form.append('email', fields.email);
    Form.append('password', fields.password);
    axios.post("http://localhost/AchatForm/cpanelLogin.php", Form)
    .then(response => {
      if(response.data === 'successLogin'){
        sessionStorage.setItem('adminData', fields.email);
        setAdminData(true);
      }else{
        document.querySelector('.top_errors').textContent = response.data;
        document.querySelector('.top_errors').style.display = 'block';
      }
    })
    .catch(error => console.log(error))
  }

  return (
    <form className="admin_login" method='POST' onSubmit={e => login(e)}>
      {sessionStorage.getItem('adminData') !== null ? <Redirect to="/cpanel" /> : ''}
      <h3>Enter email and password to login</h3>
      <span className="top_errors"></span>
      <input type="email" placeholder="Email" onChange={(e) => setFields({...fields, email:e.target.value})} />
      <input type="password" placeholder="Password" onChange={(e) => setFields({...fields, password:e.target.value})} />
      <div className="divbtn">
        <button className="admin_login_btn" type="submit">Login</button>
      </div>
      {adminData? <Redirect to="/cpanel" /> : '' }
    </form>
  );
}

export default Login;