import React from 'react';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';
import Navigation from './components/Nav/NavContainer';
import Header from './components/Header/Header';
import Support from './components/Support/Support';
import Partition from './components/Partition/Partition';
import Featured from './components/Featured/Featured';
import Brend from './components/Brend/Brend';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import Recent from './components/Recent/Recent';
import SliderMain from './components/SliderMein/SliderMain';

function App(props) {

  return (
    <div className="App">
      <Navigation />

      <Header />

      <SliderMain />

      <Support />

      <Partition />

      <Featured />

      <Partition />

      <Recent />

      <Partition />

      <Brend />

      <Partition />

      <Testimonial />

      <Footer />
    </div>

  );
}

export default App;
