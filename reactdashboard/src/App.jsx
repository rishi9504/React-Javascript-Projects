import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Users = React.lazy(() => import('./pages/Users'));
const Settings = React.lazy(() => import('./pages/Settings'));

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </div>
  );
}
