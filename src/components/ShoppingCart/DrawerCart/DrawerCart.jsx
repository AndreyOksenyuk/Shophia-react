import React from 'react';
import style from './Drawer.module.scss'
import 'antd/dist/antd.css';
import { Drawer, Button, Popconfirm } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const DrawerCart = (props) => {

   let totalPrice = 0
   let totalPriceWithoutDiscont = 0

   props.productCards.forEach(card => {
      if (!card.discount) {
         totalPrice += card.price * card.count
      } else {
         totalPrice += (+card.price * card.count) - ((+card.price * card.count) / 100 * card.discountValue)
      }
      totalPriceWithoutDiscont += (+card.price * card.count)
   });

   const onClearCart = () => {
      props.clearShopingCart()
   }


   return (
      <div className={style.DrawerCart}>

         <Drawer
            width={600}
            title="Shopping cart"
            placement="right"
            closable={false}
            onClose={props.onClose}
            visible={props.visible}
         >
            <Button
               shape="circle"
               icon={<CloseOutlined />}
               onClick={props.onClose}
               className={style.closeBtn}
            />

            <div className={style.Drawer_content}>
               <div className={style.totalCountWrapper}>
                  <h4>Total count: {props.productCards.length}</h4>
                  <Popconfirm
                     placement="topLeft"
                     title={'All products will be removed from the shopping cart!'}
                     onConfirm={onClearCart}
                     okText="confirm"
                     okType="danger"
                     cancelText="cancel"
                  >
                     <Button danger >Clear the shopping cart</Button>
                  </Popconfirm>

               </div>
               <hr />

               <div className={style.totalPrice}>
                  {totalPriceWithoutDiscont !== totalPrice &&
                     <p className={style.whitoutDiscount}>
                        The total amount without the discount:
                     <span>{totalPriceWithoutDiscont} $</span>
                     </p>
                  }
                  <p className={style.whithDiscount}>
                     Total amount with discount:
                     <span>{totalPrice} $</span>
                  </p>
               </div>

               <PlaceOrder 
                  productCards={props.productCards}
                  totalPrice={totalPrice}
                  setOrder={props.setOrder}
                  order={props.order}
               />

            </div>
         </Drawer>
      </div>
   );
}

export default DrawerCart;
