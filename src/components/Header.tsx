import React from 'react';
import { Leaf, Bell, User, Menu } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Leaf className="h-4 w-4" /> },
    { id: 'adoption', label: 'Adopt Trees', icon: <Leaf className="h-4 w-4" /> },
    { id: 'leaderboard', label: 'Leaderboard', icon: <Leaf className="h-4 w-4" /> },
    { id: 'certificates', label: 'Certificates', icon: <Leaf className="h-4 w-4" /> },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-green-800">Envifriend</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="md:hidden p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;