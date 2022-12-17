import React from "react";
import styles from '@styles/ProductDetail.module.scss';
import ProductInfo from "@components/ProductInfo";
import closeIcon from '@icons/icon_close.png';
import Image from "next/image";

const ProductDetail = () => {
  return (
    <aside className={styles['product-detail']}>
      <div className={styles['product-detail-close']}>
        <Image src={closeIcon} alt="close" />
            <ProductInfo />
      </div>
    </aside>
  );
};

export default ProductDetail;
