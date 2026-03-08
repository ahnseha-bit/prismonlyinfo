import React from 'react';
import { Outlet } from 'react-router-dom';
import BackgroundStars from './BackgroundStars';
import Header from './Header';

export default function Layout() {
  return (
    <div className="min-h-screen relative font-serif text-slate-600">
      <BackgroundStars />
      <Header />
      <main className="container mx-auto px-4 py-24 relative z-10 flex flex-col items-center min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
