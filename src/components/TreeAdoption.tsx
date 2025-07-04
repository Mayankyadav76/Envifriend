import React, { useState } from 'react';
import { TreePine, MapPin, User, Heart, Star, Filter } from 'lucide-react';

const TreeAdoption: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'available' | 'sponsored'>('available');

  const availableTrees = [
    {
      id: 1,
      type: 'Mango Tree',
      planterName: 'Rahul Kumar',
      location: 'Village Rampur, UP',
      cost: '₹500',
      description: 'Will be planted near the school compound for shade and fruit production.',
      image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 4.8,
      treesPlanted: 45,
      distance: '2.5 km from city center'
    },
    {
      id: 2,
      type: 'Neem Tree',
      planterName: 'Priya Sharma',
      location: 'Sector 12, Noida',
      cost: '₹300',
      description: 'Medicinal tree that will be planted in the community garden.',
      image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 4.9,
      treesPlanted: 67,
      distance: '1.2 km from city center'
    },
    {
      id: 3,
      type: 'Banyan Tree',
      planterName: 'Amit Patel',
      location: 'Green Valley, Gurgaon',
      cost: '₹800',
      description: 'Large shade tree for the community park. Will provide oxygen for decades.',
      image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 4.7,
      treesPlanted: 32,
      distance: '3.8 km from city center'
    },
    {
      id: 4,
      type: 'Peepal Tree',
      planterName: 'Sunita Devi',
      location: 'Village Mehrauli, Delhi',
      cost: '₹400',
      description: 'Sacred tree that will be planted near the temple for spiritual significance.',
      image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 4.6,
      treesPlanted: 23,
      distance: '4.1 km from city center'
    }
  ];

  const sponsoredTrees = [
    {
      id: 1,
      type: 'Mango Tree',
      planterName: 'Ravi Singh',
      location: 'Village Khaira, UP',
      adoptedDate: '2024-01-15',
      status: 'Growing Well',
      height: '2.5 feet',
      lastUpdate: '2 days ago'
    },
    {
      id: 2,
      type: 'Neem Tree',
      planterName: 'Kavita Verma',
      location: 'Sector 8, Noida',
      adoptedDate: '2024-01-10',
      status: 'Needs Care',
      height: '1.8 feet',
      lastUpdate: '1 day ago'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Tree Adoption Marketplace</h2>
        <p className="text-green-100 mb-6">Connect with rural planters and sponsor trees in your community</p>
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">47</div>
            <div className="text-green-100">Trees Available</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">12</div>
            <div className="text-green-100">Your Sponsored</div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl p-1 shadow-sm border border-gray-100">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveTab('available')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
              activeTab === 'available'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Available Trees
          </button>
          <button
            onClick={() => setActiveTab('sponsored')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
              activeTab === 'sponsored'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Your Sponsored Trees
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Filter by:</span>
          </div>
          <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>All Tree Types</option>
            <option>Mango</option>
            <option>Neem</option>
            <option>Banyan</option>
            <option>Peepal</option>
          </select>
          <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>All Locations</option>
            <option>Delhi NCR</option>
            <option>UP</option>
            <option>Haryana</option>
          </select>
          <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating: High to Low</option>
          </select>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'available' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableTrees.map((tree) => (
            <div key={tree.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={tree.image} 
                  alt={tree.type}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{tree.type}</h3>
                  <span className="text-lg font-bold text-green-600">{tree.cost}</span>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{tree.planterName}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{tree.rating}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{tree.location}</span>
                </div>

                <p className="text-sm text-gray-600 mb-4">{tree.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{tree.treesPlanted} trees planted</span>
                  <span>{tree.distance}</span>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Adopt Tree
                  </button>
                  <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {sponsoredTrees.map((tree) => (
            <div key={tree.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TreePine className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{tree.type}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{tree.planterName}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{tree.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    tree.status === 'Growing Well' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {tree.status}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Height: {tree.height}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Adopted: {tree.adoptedDate} • Last update: {tree.lastUpdate}
                </div>
                <div className="flex space-x-2">
                  <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                    View Updates
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Message Planter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeAdoption;