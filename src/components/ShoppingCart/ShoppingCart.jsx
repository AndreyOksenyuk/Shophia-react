import React, { useState } from 'react';
import style from './ShoppingCart.module.scss'
import 'antd/dist/antd.css';
import { Button } from 'antd';
import ProductCard from './ProductCard/ProductCard';
import DrawerCart from './DrawerCart/DrawerCart';

const ShoppingCart = ({ productCards, 
   removeFromCart, setIsAdded, changeCountProduct, 
   clearShopingCart, setOrder, order}) => {

   const [visible, setVisible] = useState(false);

   const showDrawer = () => {
      setVisible(true);
   };

   const onClose = () => {
      setVisible(false);
   };


   return (
      <div className="container">
         <div className={style.ShoppingCart}>

            <DrawerCart 
               onClose={onClose} 
               visible={visible}
               productCards={productCards}
               clearShopingCart={clearShopingCart}
               setOrder={setOrder}
               order={order}
            />

            {productCards.length === 0
               ? <h3 className={style.textNoProduct}>There are no products in the cart</h3>
               : <div className={style.product_card_list}>
                  <Button onClick={showDrawer} className={style.showMore_btn}>More detailed</Button>
                  <ProductCard
                     cards={productCards}
                     removeFromCart={removeFromCart}
                     setIsAdded={setIsAdded}
                     changeCountProduct={changeCountProduct}
                     
                  />
                  </div>
            }

         </div>
      </div>
   );
}

export default ShoppingCart;
