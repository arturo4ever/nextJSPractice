import React from "react";
import styles from '@styles/Menu.module.scss';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href="/" >
        <p className={styles.title}>
            My orders
          </p>
          </Link>
        </li>

        <li>
        <Link href="/" >
          <p>My account</p>
          </Link>
        </li>

        <li>
        <Link href="/" >
          <p>Sign out</p>
        </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
