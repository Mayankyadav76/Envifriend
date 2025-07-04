import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TreeAdoption from './components/TreeAdoption';
import Leaderboard from './components/Leaderboard';
import Certificates from './components/Certificates';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'adoption':
        return <TreeAdoption />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'certificates':
        return <Certificates />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;