import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import InfoPage from './pages/InfoPage';
import BoothPage from './pages/BoothPage';
import EventPage from './pages/EventPage';
import LinksPage from './pages/LinksPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/main" replace />} />
          <Route path="main" element={<MainPage />} />
          <Route path="info" element={<InfoPage />} />
          <Route path="booth" element={<BoothPage />} />
          <Route path="event" element={<EventPage />} />
          <Route path="links" element={<LinksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
