import React from 'react';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';
import Head from 'next/head';

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles['my-order']}>
        <div className={styles['my-order-container']}>
          <h1 className={styles.title}>My order</h1>

          <div className={styles['my-order-content']}>
            <div className={styles.order}>
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
            </div>
            <OrderItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
