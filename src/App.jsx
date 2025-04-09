import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';


// Vamos criar componentes placeholder para as outras rotas
const Jogadores = () => <div><h2>Jogadores</h2></div>;
const Diretor = () => <div><h2>Diretor</h2></div>;
const Administrador = () => <div><h2>Administrador</h2></div>;
const Tesoureiro = () => <div><h2>Tesoureiro</h2></div>;
const Logout = () => <div><h2>Logout</h2></div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jogadores" element={<Jogadores />} />
        <Route path="/diretor" element={<Diretor />} />
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/tesoureiro" element={<Tesoureiro />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;