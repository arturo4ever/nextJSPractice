import React from "react";
import styles from "@styles/SendEmail.module.scss";
import logo from '@logos/logo_yard_sale.svg';
import Image from "next/image";
import email from '@icons/email.svg';
import Link from 'next/link';

const SendEmail = () => {
  return (
    <div className={styles.login}>
      <div className="form-container">
        <Image src={logo} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className={styles['email-image']}>
          <Image src={email} alt="email" />
        </div>
        <button className={styles['primary-button']['login-button']}>Login</button>
        <p className={styles.resend}>
          <span>Didn&apos;t receive the email?</span>
          <Link href="/">
          <p>Resend</p>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
