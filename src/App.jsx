import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Portfolio from './pages/Portfolio';
import Plataforma from './pages/Plataforma';
import Equipe from './pages/Equipe'
import Calendario from './pages/Calendario';
import Laboratorio from './pages/Laboratorio';
import Observa from './pages/Observa';
import Rbce from './pages/Rbce';
import Somos from './pages/Somos'
import Historia from './pages/Historia';
import Todos from './pages/Todos'
import Curadoria from './pages/Curadoria'
import Opniao from './pages/Opniao'
import Conversando from './pages/Conversando'
import Nota from './pages/Nota'
import Contato from './pages/Contato'
import ObservaAT from './pages/ObservaAT';
import Campanha from './pages/Campanha';

import './styles/Main.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/plataforma" element={<Plataforma />} />
                <Route path="/equipe" element={<Equipe />} />
                <Route path="/calendario" element={<Calendario />} />
                <Route path="/laboratorio" element={<Laboratorio />} />
                <Route path="/observa" element={<Observa />} />
                <Route path="/rbce" element={<Rbce />} />
                <Route path="/somos" element={<Somos />} />
                <Route path="/historia" element={<Historia />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/curadoria" element={<Curadoria />} />
                <Route path="/opniao" element={<Opniao />} />
                <Route path="/conversando" element={<Conversando />} />
                <Route path="/nota" element={<Nota />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/observativa" element={<ObservaAT />} />
                <Route path="/campanha" element={<Campanha />} />

            </Routes>
        </Router>
    );
};

export default App;
