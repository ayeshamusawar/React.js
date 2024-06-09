import React from 'react';
import NavbarComponent from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Pricing from './Components/Pricing';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog1 from './Components/Blog1';
import Blog2 from './Components/Blog2';
import Blog3 from './Components/Blog3';
import Blog4 from './Components/Blog4';
import Login from './Components/Login'; 
import Signup  from './Components/Signup';
import ToDoList from './Components/Todolist';
import AddBlog from './Components/AddBlog';


function App() {
    return (
        <div className="App">
            <Router>
                <NavbarComponent />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/blog1' element={<Blog1/>} />
                    <Route path='/blog2' element={<Blog2/>}/>
                    <Route path='/blog3' element={<Blog3/>} />
                    <Route path='/blog4' element={<Blog4/>} />
                    <Route path='/login' element={<Login/>} /> 
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/todolist' element={<ToDoList/>} /> 
                    <Route path='/addblog' element={<AddBlog />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
