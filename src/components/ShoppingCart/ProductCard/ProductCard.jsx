import React, { Fragment } from 'react';
import style from '../ShoppingCart.module.scss'
import 'antd/dist/antd.css';
import { Card, Popconfirm, Button } from 'antd';
import { CloseCircleOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProductCard = ({ cards, removeFromCart, setIsAdded, changeCountProduct }) => {

   const onDeleteProduct = (id) => {
      removeFromCart(id)
      setIsAdded(false, id)
   }


   const onMinusCount = (id, count) => {
      if (count === 0) {
         removeFromCart(id)
         setIsAdded(false, id)
      }
      changeCountProduct(id, '-')
   }
   const onPlusCount = (id) => {
      changeCountProduct(id, '+')
   }

   return (
      <>
         {
            cards.map(card => {
               return (
                  <Fragment key={card.id}>
                     <Card
                        hoverable={true}
                        className={style.product_card_list_item}
                        cover={
                           <img
                              alt="example"
                              src={card.img}
                           />
                        }
                        actions={[
                           <Button 
                              type="danger" 
                              icon={<MinusOutlined />} 
                              size='large'
                              onClick={() => onMinusCount(card.id, card.count)}
                           />,
                              <p className={style.countNamber}>{card.count}</p>,
                           <Button 
                              style={{backgroundColor: 'green', color: 'white'}} 
                              icon={<PlusOutlined />} 
                              size='large' 
                              onClick={() => onPlusCount(card.id)}
                           />,

                           <Popconfirm placement="topLeft" title={'Delete?'} onConfirm={() => onDeleteProduct(card.id)} okText="Yes" cancelText="No">
                              <CloseCircleOutlined style={{ color: 'red', fontSize: '25px' }} />
                           </Popconfirm>,
                        ]}
                     >
                        <Meta
                           title={card.title}
                           description={
                              card.discount
                                 ? `Discount on this product ${card.discountValue} %`
                                 : 'There is no discount on this product yet'
                           }
                        />

                        {card.discount
                           ? <div className={style.priceProduct}>
                              <p className={style.oldPrice}>Old price: <span >{card.price} $</span></p>
                              <p className={style.newPrice}>New price: <span>{+card.price - (+card.price / 100 * card.discountValue)} $</span></p>
                           </div>
                           : <p className={style.priceWithoutDiscount} >Price {card.price} $</p>
                        }

                     </Card>
                  </Fragment>
               )
            })
         }
      </>
   );
}

export default ProductCard;
