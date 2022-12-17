import React, { useRef } from "react";
import styles from "@styles/Login.module.scss";
import logo from "@logos/logo_yard_sale.svg";
import Image from "next/image";
import Link from 'next/link';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <div className={styles.login}>
      <div className={styles['form-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <form action="/" className={styles.form} ref={form}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="platzi@example.com"
            className={styles['input']['input-email']}
          />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className={styles['input']['input-password']}
          />
          <button
            type="submit"
            className={styles['primary-button']['login-button']}
            onClick={handleSubmit}
          >
            Log in
          </button>
          <Link href="/">
          <p>Forgot my password</p>
          </Link>
        </form>
        <button className={styles['secondary-button']['signup-button']}>Sign up</button>
      </div>
    </div>
  );
};

export default Login;
