import React from "react";
import styles from "@styles/NewPassword.module.scss";
import logo from '@logos/logo_yard_sale.svg';
import Image from "next/image";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles['form-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Create a new password</h1>
        <p className={styles.subtitle}>Enter a new password for the account</p>
        <form action="/" className={styles.form}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className={styles['input']['input-password']}
          />
          <label htmlFor="new-password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className={styles['input']['input-password']}
          />
          <input
            type="submit"
            value="Confirm"
            className={styles['primary-button']['login-button']}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
