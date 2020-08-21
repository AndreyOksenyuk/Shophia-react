import React, { useState } from 'react';
import style from './PlaceOrder.module.scss'
import 'antd/dist/antd.css';
import { Button, Modal, Typography } from 'antd';
import FormOrder from './FormOrder';

const { Paragraph } = Typography;

const PlaceOrder = (props) => {

   let [showForm, setShowForm] = useState(false)
   let [ShowModal, setShowModal] = useState(false)

   const onShowForm = () => {
      setShowForm(true)
   }

   const onOkModal = () => {
      setShowModal(false)
      setShowForm(false)
   }

   const onSubmitOrder = (value) => {

      let products = []
      props.productCards.forEach(e => {
         if (e.count > 0) {
            products.push({
               id: e.id,
               titleProduct: e.title,
               priceProduct: e.price,
               count: e.count,
            })
         }
      })

      let objOrder = {
         name: value.name,
         phone: value.phone,
         totalPrice: props.totalPrice,
         order: {
            totalCount: products.length,
            products: products,
         }
      }      
      if (value.name && value.phone) {
         setShowModal(true)
         props.setOrder(objOrder)
         console.warn('Your order has been sent', [objOrder] );
      }
   }


   return (
      <div className={style.placeOrder}>
         <Modal
            title="Your order has been sent"
            visible={ShowModal}
            onOk={onOkModal}
            onCancel={onOkModal}
         >
            <Paragraph code='true'>
               {JSON.stringify(props.order)}
            </Paragraph>
         </Modal>
         {!showForm
            ? <Button
               type="primary"
               className={style.orderBtn}
               onClick={onShowForm}
            >Place your order</Button>

            : <div className={style.formOrder}>
                  <FormOrder onSubmit={onSubmitOrder} />
               </div>

         }

      </div>

   );
}

export default PlaceOrder;
