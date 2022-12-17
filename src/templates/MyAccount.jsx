import React from "react";
import styles from "@styles/MyAccount.module.scss";

const MyAccount = () => {
  return (
    <div className={styles.login}>
      <div className={styles['form-container']}>
        <h1 className={styles.title}>My account</h1>

        <form action="/" className={styles.form}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Name
            <p className={styles.value}>Camila Yokoo</p>
            </label>

            <label htmlFor="email" className={styles.label}>
              Email
            <p className={styles.value}>camilayokoo@gmail.com</p>
            </label>

            <label htmlFor="password" className={styles.label}>
              Password
            <p className={styles.value}>*********</p>
            </label>
          </div>

          <input
            type="submit"
            value="Edit"
            className={styles['secondary-button']['login-button']}
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
