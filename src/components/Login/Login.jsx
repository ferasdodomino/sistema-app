import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import welcomeImage from '../../assets/welcome.png'; // Importe uma imagem (crie a pasta 'assets' em 'src' e coloque uma imagem lá)
import logoImage from '../../assets/logo-exemplo.png';

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
      <div className={styles.logoImage}>
        <img src={logoImage} className={styles.logoImage} alt="Logomarca do sistema" />
      </div>
        <div className={styles.boxTitle}>
          <h1 className={styles.title}>Fazer login</h1>
          <p>
            Não tem uma conta? <Link to="/register" className={styles.link}>Cadastre-se</Link>
          </p>
        </div>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email address</label>
              <input type="email" id="email" name="email" className={styles.input} placeholder='exemplo@gmail.com' />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Senha</label>
              <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              placeholder="••••••••" // Placeholder com bolinhas
            />
            </div>
            <button  type="submit" className={styles.button}>Entrar no Sistema</button>
          </form>
          <p>
            <Link to="/forgot-password" className={styles.link}>Esqueceu a senha?</Link>
          </p>
        </div>
          <div className={styles.imageContainer}>
            <img src={welcomeImage} alt="Bem-vindo ao Sistema" className={styles.welcomeImage} />
          </div>
          
    </div>
  );
}

export default Login;