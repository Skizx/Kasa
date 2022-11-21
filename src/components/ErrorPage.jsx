import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/components/error.scss"

const ErrorPage = () => {
  return (
    <>
    <div className='error-container'>
      <h1>404</h1>
      <p>Oups! La page que<br></br> vous demandez n'existe pas.</p>
      <Link to="/" className='error-container_link'>Retourner sur la page d'accueil</Link>
    </div>
    </>
  );
};

export default ErrorPage;