
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import UnstitchedSuit from "./Components/UnstitchedSuit/UnstitchedSuit.jsx";
import TopSales from "./Components/TopSales/TopSales.jsx";
import Women from "./Components/Women/Women.jsx";
import Pcs1 from "./Components/UnstitchedSuit/Pcs1.jsx";
import Pcs2 from "./Components/UnstitchedSuit/Pcs2.jsx";
import Pcs3 from "./Components/UnstitchedSuit/Pcs3.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import About from "./Components/About/About.jsx";
import ShoppingCart from "./Components/Navbar/ShoppingCart.jsx";
import ProductDetail from "./Components/ProductDetail/ProductDetail.jsx";
import Stiched from "./Components/Stiched/Stiched.jsx";
import UserLogin from "./Components/Navbar/UserLogin.jsx";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/women" exact element= {<Women />} />
          <Route path="/women/:id" element={<ProductDetail />} />
          <Route path="/stiched" exact element={<Stiched />} />
          <Route path="/unstiched" exact element={<UnstitchedSuit/>} />
          <Route path="/topsales" exact element={<TopSales />} />
          <Route path="/Pcs1" exact element={<Pcs1 />} />
          <Route path="/Pcs2" exact element={<Pcs2 />} />
          <Route path="/Pcs3" exact element={<Pcs3 />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/shoppingcart" exact element={<ShoppingCart />} />
          <Route path="/userlogin" exact element={<UserLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
