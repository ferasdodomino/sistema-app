import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <aside style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '20px', float: 'left' }}>
        <h2>Menu</h2>
        <ul>
          <li><Link to="/jogadores">Jogadores</Link></li>
          <li><Link to="/diretor">Diretor</Link></li>
          <li><Link to="/administrador">Administrador</Link></li>
          <li><Link to="/tesoureiro">Tesoureiro</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </aside>
      <main style={{ marginLeft: '220px', padding: '20px' }}>
        <h1>Painel Principal</h1>
        {/* Aqui será exibido o conteúdo principal de cada seção */}
      </main>
    </div>
  );
}

export default Dashboard;