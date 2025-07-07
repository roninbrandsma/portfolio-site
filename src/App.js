import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import HomePage from './components/homepage/HomePage';
import AboutPage from './components/aboutpage/AboutPage';
import ContactPage from './components/contactpage/ContactPage';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/portfolio' element={<AboutPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
}


export default App;