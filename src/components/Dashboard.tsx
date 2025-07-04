import React from 'react';
import { TreePine, Droplets, Award, TrendingUp, Camera, MapPin, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Trees Planted', value: '42', icon: <TreePine className="h-6 w-6" />, color: 'green' },
    { label: 'Trees Survived', value: '38', icon: <TreePine className="h-6 w-6" />, color: 'blue' },
    { label: 'GreenPoints', value: '2,850', icon: <Award className="h-6 w-6" />, color: 'yellow' },
    { label: 'CO₂ Offset', value: '156 kg', icon: <TrendingUp className="h-6 w-6" />, color: 'purple' },
  ];

  const recentTrees = [
    { id: 1, name: 'Mango Tree #M-042', location: 'Sector 5, Noida', planted: '2024-01-15', status: 'healthy', nextCare: '2 days' },
    { id: 2, name: 'Neem Tree #N-038', location: 'Park Avenue, Delhi', planted: '2024-01-10', status: 'needs-water', nextCare: 'Today' },
    { id: 3, name: 'Banyan Tree #B-023', location: 'Green Valley, Gurgaon', planted: '2024-01-05', status: 'healthy', nextCare: '5 days' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-800';
      case 'needs-water': return 'bg-yellow-100 text-yellow-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Welcome back, Priya!</h2>
        <p className="text-green-100 mb-6">You're making a real difference in your community. Keep growing!</p>
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">District Rank</div>
            <div className="text-green-100">#7 in Delhi NCR</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">Green Guardian</div>
            <div className="text-green-100">Status: Active</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${
                stat.color === 'green' ? 'bg-green-100 text-green-600' :
                stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                stat.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Trees */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Your Trees</h3>
            <button className="text-green-600 hover:text-green-700 font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {recentTrees.map((tree) => (
              <div key={tree.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TreePine className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900">{tree.name}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{tree.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Planted {tree.planted}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(tree.status)}`}>
                    {tree.status === 'healthy' ? 'Healthy' : tree.status === 'needs-water' ? 'Needs Water' : 'Critical'}
                  </span>
                  <button className="p-2 text-gray-400 hover:text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          {/* Plant New Tree */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
                Plant New Tree
              </button>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Upload Tree Photo
              </button>
              <button className="w-full bg-yellow-600 text-white py-3 px-4 rounded-lg hover:bg-yellow-700 transition-colors font-medium">
                Check IoT Sensor
              </button>
            </div>
          </div>

          {/* Soil Moisture Alert */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Droplets className="h-5 w-5 text-yellow-600" />
              <h4 className="font-medium text-yellow-800">Soil Alert</h4>
            </div>
            <p className="text-sm text-yellow-700 mb-3">
              Your Neem Tree #N-038 needs watering. Soil moisture: 25%
            </p>
            <button className="text-yellow-800 hover:text-yellow-900 font-medium text-sm">
              View Details →
            </button>
          </div>

          {/* Achievement */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Award className="h-5 w-5" />
              <h4 className="font-medium">New Achievement!</h4>
            </div>
            <p className="text-sm text-purple-100 mb-3">
              Congratulations! You've earned the "Tree Nurture" badge for maintaining 30+ trees.
            </p>
            <button className="text-white hover:text-purple-100 font-medium text-sm">
              View Certificate →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;