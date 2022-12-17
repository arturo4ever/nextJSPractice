import React from "react";
import OrderItem from "@components/OrderItem";
import styles from '@styles/Orders.module.scss';

const Orders = () => {
  return (
    <div className={styles['my-order']}>
      <div className={styles['my-order-container']}>
        <h1 className={styles.title}>My orders</h1>
        <div className={styles['my-order-content']}>
          <OrderItem />
        </div>
      </div>
    </div>
  );
};

export default Orders;
