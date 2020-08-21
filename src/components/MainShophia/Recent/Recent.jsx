import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProductCartAC } from '../../../Redux/cart-reducer';
import 'antd/dist/antd.css';
import { message } from 'antd';
import { setIsAdded } from '../../../Redux/app-reducer';


const Recent = () => {
   const recent = useSelector(state => state.app.recent)
   const dispatch = useDispatch()


   const onAddToCart = (item) => {
      if (item.isAdded) {
         message.warning('The product has already been added')
      }
      else {
         dispatch(setProductCartAC(item))
         dispatch(setIsAdded(true, item.id))
         message.success('Product added to the shopping cart')
      }
   }

   return (
      <div className="container">
         <div className="recent">
            {
               recent.map(item => {
                  return (
                     <div className="recent__item" key={item.id}>
                        <img src={item.img} alt="clothes" />
                        <div className="recent__item-discount"
                           style={item.discount ? { display: 'flex' } : { display: 'none' }}>
                           <p>{item.discountValue}<span>%</span></p>
                        </div>

                        <div className="recent__item-blackout"></div>
                        <div className='recent__item-price'>
                           {item.discount
                              ? <><h4><span >{item.price} $</span></h4>
                                 <h3><span>{+item.price - (+item.price / 100 * item.discountValue)} $</span></h3>
                              </>
                              : <p>{item.price} $</p>
                           }
                        </div>

                        <button
                           style={item.isAdded ? { color: 'green' } : { color: 'white' }}
                           className="btn recent__item-btn"
                           onClick={() => onAddToCart(item)}
                        >
                           {item.isAdded
                              ? 'Already added'
                              : '+ Add to cart'
                           }
                        </button>
                     </div>
                  )
               })
            }
         </div>
      </div>
   );
}

export default Recent;
