import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Home } from './screens/Home';
import Dashboard from './screens/Dashboard';
import { Layout } from './layout';
import { ModalProvider } from './context/ModalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <ModalProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ModalProvider>
    </div>
  );
}

export default App;
