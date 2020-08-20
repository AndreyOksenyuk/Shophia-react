import React, { useState } from 'react';
import style from './ShoppingCart.module.scss'
import 'antd/dist/antd.css';
import { Drawer, Button } from 'antd';
import ProductCard from './ProductCard/ProductCard';

const ShoppingCart = ({ productCards, removeFromCart, setIsAdded, changeCountProduct }) => {
   const [visible, setVisible] = useState(false);

   const showDrawer = () => {
      setVisible(true);
   };

   const onClose = () => {
      setVisible(false);
   };


   return (
      <div className="container">
         <h3>ShoppingCart</h3>
         <Button type="primary" onClick={showDrawer}>More detailed</Button>
         <Drawer
            width={600}
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
         >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
         </Drawer>

         <div className={style.product_card_list}>
            <ProductCard 
               cards={productCards} 
               removeFromCart={removeFromCart} 
               setIsAdded={setIsAdded}
               changeCountProduct={changeCountProduct}
            />
         </div>
      </div>
   );
}

export default ShoppingCart;
