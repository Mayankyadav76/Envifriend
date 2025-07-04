import React, { useState } from 'react';
import { TreePine, Droplets, Award, TrendingUp, Camera, MapPin, Calendar, Plus, Upload, Sensors, X, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [showPlantModal, setShowPlantModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showSensorModal, setShowSensorModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const stats = [
    { label: 'Trees Planted', value: user?.treesPlanted.toString() || '0', icon: <TreePine className="h-6 w-6" />, color: 'green' },
    { label: 'Trees Survived', value: '38', icon: <TreePine className="h-6 w-6" />, color: 'blue' },
    { label: 'GreenPoints', value: user?.greenPoints.toLocaleString() || '0', icon: <Award className="h-6 w-6" />, color: 'yellow' },
    { label: 'CO₂ Offset', value: '156 kg', icon: <TrendingUp className="h-6 w-6" />, color: 'purple' },
  ];

  const recentTrees = [
    { id: 1, name: 'Mango Tree #M-042', location: 'Sector 5, Noida', planted: '2024-01-15', status: 'healthy', nextCare: '2 days' },
    { id: 2, name: 'Neem Tree #N-038', location: 'Park Avenue, Delhi', planted: '2024-01-10', status: 'needs-water', nextCare: 'Today' },
    { id: 3, name: 'Banyan Tree #B-023', location: 'Green Valley, Gurgaon', planted: '2024-01-05', status: 'healthy', nextCare: '5 days' },
  ];

  const sensorData = [
    { id: 1, treeId: 'M-042', soilMoisture: 75, temperature: 28, humidity: 65, status: 'optimal' },
    { id: 2, treeId: 'N-038', soilMoisture: 25, temperature: 32, humidity: 45, status: 'needs-water' },
    { id: 3, treeId: 'B-023', soilMoisture: 80, temperature: 26, humidity: 70, status: 'optimal' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-800';
      case 'needs-water': return 'bg-yellow-100 text-yellow-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSensorStatusColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'text-green-600';
      case 'needs-water': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const handlePlantNewTree = () => {
    setShowPlantModal(true);
  };

  const handleUploadPhoto = () => {
    setShowPhotoModal(true);
  };

  const handleCheckSensor = () => {
    setShowSensorModal(true);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmitPlanting = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate tree planting submission
    alert('Tree planting registered successfully! You will receive GPS coordinates for verification.');
    setShowPlantModal(false);
  };

  const handleSubmitPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFile) {
      // Simulate photo upload
      alert(`Photo "${selectedFile.name}" uploaded successfully! AI verification in progress.`);
      setShowPhotoModal(false);
      setSelectedFile(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h2>
        <p className="text-green-100 mb-6">You're making a real difference in your community. Keep growing!</p>
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">District Rank</div>
            <div className="text-green-100">#{user?.rank} in {user?.location}</div>
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
                  <button 
                    onClick={handleUploadPhoto}
                    className="p-2 text-gray-400 hover:text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                  >
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
              <button 
                onClick={handlePlantNewTree}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>Plant New Tree</span>
              </button>
              <button 
                onClick={handleUploadPhoto}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Upload className="h-5 w-5" />
                <span>Upload Tree Photo</span>
              </button>
              <button 
                onClick={handleCheckSensor}
                className="w-full bg-yellow-600 text-white py-3 px-4 rounded-lg hover:bg-yellow-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Sensors className="h-5 w-5" />
                <span>Check IoT Sensor</span>
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

      {/* Plant New Tree Modal */}
      {showPlantModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Plant New Tree</h3>
                <button 
                  onClick={() => setShowPlantModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmitPlanting} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tree Type</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Mango Tree</option>
                    <option>Neem Tree</option>
                    <option>Banyan Tree</option>
                    <option>Peepal Tree</option>
                    <option>Gulmohar Tree</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input 
                    type="text" 
                    placeholder="Enter planting location"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
                  <textarea 
                    placeholder="Why are you planting this tree?"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-20"
                    required
                  />
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-800">GPS Verification Required</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    After submission, you'll receive GPS coordinates. Please plant the tree at the exact location for verification.
                  </p>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button 
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Register Tree
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowPlantModal(false)}
                    className="flex-1 border border-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Upload Photo Modal */}
      {showPhotoModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Upload Tree Photo</h3>
                <button 
                  onClick={() => setShowPhotoModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmitPhoto} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Tree</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Mango Tree #M-042</option>
                    <option>Neem Tree #N-038</option>
                    <option>Banyan Tree #B-023</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photo</label>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  {selectedFile && (
                    <p className="text-sm text-green-600 mt-2">Selected: {selectedFile.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Notes (Optional)</label>
                  <textarea 
                    placeholder="Any observations about the tree's growth?"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-20"
                  />
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-800">AI Verification</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Your photo will be verified using AI to ensure genuine tree growth and prevent fake uploads.
                  </p>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button 
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Upload Photo
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowPhotoModal(false)}
                    className="flex-1 border border-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* IoT Sensor Modal */}
      {showSensorModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">IoT Sensor Data</h3>
                <button 
                  onClick={() => setShowSensorModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                {sensorData.map((sensor) => (
                  <div key={sensor.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">Tree #{sensor.treeId}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        sensor.status === 'optimal' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {sensor.status === 'optimal' ? 'Optimal' : 'Needs Attention'}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${getSensorStatusColor(sensor.status)}`}>
                          {sensor.soilMoisture}%
                        </div>
                        <div className="text-sm text-gray-600">Soil Moisture</div>
                        {sensor.soilMoisture < 30 && (
                          <div className="flex items-center justify-center space-x-1 mt-1">
                            <AlertTriangle className="h-4 w-4 text-yellow-600" />
                            <span className="text-xs text-yellow-600">Low</span>
                          </div>
                        )}
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{sensor.temperature}°C</div>
                        <div className="text-sm text-gray-600">Temperature</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{sensor.humidity}%</div>
                        <div className="text-sm text-gray-600">Humidity</div>
                      </div>
                    </div>
                    
                    {sensor.status === 'needs-water' && (
                      <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          <strong>Action Required:</strong> Soil moisture is low. Water the tree within 24 hours.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-blue-800">IoT Sensor Kit</span>
                </div>
                <p className="text-sm text-blue-700">
                  Get your ₹150 IoT soil moisture sensor kit to monitor your trees automatically and receive real-time alerts.
                </p>
                <button className="mt-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Order Sensor Kit →
                </button>
              </div>
              
              <div className="flex justify-end pt-4">
                <button 
                  onClick={() => setShowSensorModal(false)}
                  className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;