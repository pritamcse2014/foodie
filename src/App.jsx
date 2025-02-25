import React from 'react';
import './App.css'
import AppStore from './components/AppStore/AppStore';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Hero />
        <Services />
        <Banner />
        <AppStore />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
};

export default App;