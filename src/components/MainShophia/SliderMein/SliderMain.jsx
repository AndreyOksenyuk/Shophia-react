import React from 'react';
import '../MainShophia.scss'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';

const SliderMain = (props) => {
   let sliderData = useSelector(state => state.app.meinSlider)
   return (
      <div className="slider-wrapper">
         <div className="slider">
            <Carousel autoplay>
               {
                  sliderData.map(el => {
                     return (
                        <div className="slider__slid" key={el.id}>
                           <img src={el.img} alt="clothes" className="slider__img" />
                           <div className="slider__content" >
                              <div className="slider__content-inner" >
                                 <p>Mid-Season</p>
                                 <h3>Sale</h3>
                                 <div className="UpTo-line"><span>Up To</span></div>
                                 <h4>{el.discount}% &nbsp; off</h4>
                              </div>
                              <a href="/" className="btn">Shop now</a>
                           </div>
                        </div>
                     )
                  })
               }
            </Carousel>
         </div>
      </div>
   );
}

export default SliderMain;
