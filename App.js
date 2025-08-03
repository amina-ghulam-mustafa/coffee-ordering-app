// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

import HeroSection from './Components/HeroSection';
import HeroSection2 from './Components/HeroSection2';
import ProductCard from './Components/ProductCard';
import AllProducts from './Components/AllProducts';
import Login from './Components/Login';
import AboutUs from './Components/AboutUs';
import SettingPage from './Components/SettingPage';
import EditProfile from './Components/EditProfile';
import PrivacySettings from './Components/PrivacySettings';
import Tracking from './Components/Tracking';
import Cart from './Components/Cart';
import Payment from './Components/Payment';
import Confirmation from './Components/Confirmation';
import  ProductView from './Components/ProductView';

function App() {
  return (
    <Router>
  
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="background-wrapper">
                <div className="overlay"></div>
                <div className="content">
                  <HeroSection />
                </div>
              </div>
              <HeroSection2 />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/productview/:id" element={<ProductView />} />
        <Route path="/privacysetting" element={<PrivacySettings />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
