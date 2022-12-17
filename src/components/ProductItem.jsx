import React, { useContext } from "react";
import addCart from '@icons/bt_add_to_cart.svg';
import AppContext from "@context/AppContext";
import styles from "@styles/ProductItem.module.scss";
import Image from 'next/image';

const ProductItem = ( { product } ) => {
  const { addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart(item);
  };
  return (
    <div className={styles['product-card']}>
      <Image
        src={product?.images[0]}
        alt={product?.title}
        width={240}
        height={240}
      />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => {handleCart(product);}} aria-hidden="true">
          <Image src={addCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
