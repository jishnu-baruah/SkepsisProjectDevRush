// src/layouts/MainLayout.jsx
import React from 'react';
import Navigation from '../components/Navigation';

const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <Navigation />
    <main className="container mx-auto px-4 py-8">
      {children}
    </main>
  </div>
);

export default MainLayout;