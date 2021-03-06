import './MainShophia.scss'
import React from 'react';
import Navigation from './Nav/NavContainer';
import Header from './Header/Header';
import Support from './Support/Support';
import Partition from './Partition/Partition';
import Featured from './Featured/Featured';
import Brend from './Brend/Brend';
import Testimonial from './Testimonial/Testimonial';
import Footer from './Footer/Footer';
import Recent from './Recent/Recent';
import SliderMain from './SliderMein/SliderMain';

const MainShophia = () => {
   return (
      <>
         <Navigation />

         <Header />

         <main>
            <SliderMain />

            <Support />

            <Partition text={'Feature'}/>

            <Featured />

            <Partition text={'Recent'}/>

            <Recent />

            <Partition text={'Brend'}/>

            <Brend />

            <Partition text={'Testimonial'}/>

            <Testimonial />
         </main>

         <Footer />
      </>
   );
}

export default MainShophia;
