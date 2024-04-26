import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />  
        <Route path='home' element={<Home/>} />  
        <Route path='cadastro' element={<Register/>} />  
        <Route path='login' element={<Login/>} />  
        <Route path='*' element={<NotFound/>} />  
      </Routes>  
    </BrowserRouter>
    </>
  );
}

export default App;