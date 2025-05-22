import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';
import welcomeImage from '../../assets/welcome.png';
import logoImage from '../../assets/logo-exemplo.png';

function Register() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <div className={styles.logoImage}>
          <img src={logoImage} className={styles.logoImage} alt="Logomarca do sistema" />
        </div>
        <div className={styles.boxTitle}>
          <h1 className={styles.title}>Cadastre-se</h1>
        </div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName" className={styles.label}>Nome ou Apelido</label>
            <input type="text" id="firstName" name="firstName" className={styles.input} placeholder="digite neste campo" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" name="email" className={styles.input} placeholder="exemplo@gmail.com" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className={styles.button}>Cadastrar</button>
        </form>
        <p>
          Já tem uma conta? <Link to="/login" className={styles.link}>Fazer login</Link>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={welcomeImage} alt="Bem-vindo ao Sistema" className={styles.welcomeImage} />
      </div>
    </div>
  );
}

export default Register;