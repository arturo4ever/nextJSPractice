import React, { useState, useContext } from "react";
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import styles from '@styles/Header.module.scss';
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className={styles.Nav} >
      <img  src={menu.src} alt="menu" className={styles.menu} />

      <div className={styles['navbar-left']}>
        <Link href="/">
        <Image src={logo} alt="logo" className={styles['nav-logo']} />
        </Link>
        <ul>
          <li>
            <Link href="/">
            <p>All</p>
            </Link>
          </li>
          <li>
          <Link href="/">
            <p>Clothes</p>
          </Link>
          </li>
          <li>
          <Link href="/">
            <p>Electronics</p>
          </Link>
          </li>
          <li>
          <Link href="/">
            <p>Furnitures</p>
          </Link>
          </li>
          <li>
          <Link href="/">
            <p>Toys</p>
          </Link>
          </li>
          <li>
          <Link href="/">
            <p>Others</p>
          </Link>
          </li>
        </ul>
      </div>

      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={() => {handleToggle(); setToggleOrders(false);}} aria-hidden="true">platzi@example.com</li>
          <li className={styles['navbar-shopping-cart']} 
          onClick={() => {setToggleOrders(!toggleOrders); setToggle(false);}} aria-hidden="true">
            <Image src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder/>}
    </nav>
  );
};

export default Header;
