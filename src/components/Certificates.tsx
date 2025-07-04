import React, { useState } from 'react';
import { Award, Download, Share2, Eye, Calendar, CheckCircle } from 'lucide-react';

const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certificates = [
    {
      id: 1,
      title: 'Green Guardian Certificate',
      description: 'Awarded for maintaining 40+ trees in Delhi NCR district',
      issuer: 'Delhi Municipal Corporation',
      issueDate: '2024-01-15',
      type: 'Achievement',
      status: 'Verified',
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      badgeColor: 'bg-green-600',
      credentialId: 'GG-2024-DL-001234'
    },
    {
      id: 2,
      title: 'Tree Nurturer Badge',
      description: 'Successfully nurtured 30 trees for 6 months',
      issuer: 'Envifriend Platform',
      issueDate: '2024-01-10',
      type: 'Milestone',
      status: 'Verified',
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      badgeColor: 'bg-blue-600',
      credentialId: 'TN-2024-001567'
    },
    {
      id: 3,
      title: 'Environmental Champion',
      description: 'Top 5 contributor in Delhi NCR Green Mission',
      issuer: 'State Forest Department',
      issueDate: '2024-01-05',
      type: 'Recognition',
      status: 'Verified',
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      badgeColor: 'bg-purple-600',
      credentialId: 'EC-2024-SF-002891'
    },
    {
      id: 4,
      title: 'Carbon Offset Hero',
      description: 'Contributed to offsetting 500kg of CO₂',
      issuer: 'Climate Action Network',
      issueDate: '2023-12-20',
      type: 'Impact',
      status: 'Verified',
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      badgeColor: 'bg-orange-600',
      credentialId: 'COH-2023-CAN-003456'
    },
    {
      id: 5,
      title: 'Community Leader',
      description: 'Led 5 successful plantation drives in local community',
      issuer: 'Local Panchayat',
      issueDate: '2023-12-15',
      type: 'Leadership',
      status: 'Verified',
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      badgeColor: 'bg-red-600',
      credentialId: 'CL-2023-LP-004789'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Achievement': return 'bg-green-100 text-green-800';
      case 'Milestone': return 'bg-blue-100 text-blue-800';
      case 'Recognition': return 'bg-purple-100 text-purple-800';
      case 'Impact': return 'bg-orange-100 text-orange-800';
      case 'Leadership': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewCertificate = (certificate: any) => {
    setSelectedCertificate(certificate);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Your Certificates</h2>
        <p className="text-indigo-100 mb-6">Digital credentials for your environmental achievements</p>
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">5</div>
            <div className="text-indigo-100">Certificates Earned</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">DigiLocker</div>
            <div className="text-indigo-100">Synced & Verified</div>
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="relative">
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className={`${cert.badgeColor} p-2 rounded-lg`}>
                  <Award className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  <CheckCircle className="h-3 w-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(cert.type)}`}>
                  {cert.type}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>Issued: {cert.issueDate}</span>
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Issuer:</span> {cert.issuer}
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">ID:</span> {cert.credentialId}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleViewCertificate(cert)}
                  className="flex-1 bg-indigo-600 text-white py-2 px-3 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium flex items-center justify-center space-x-1"
                >
                  <Eye className="h-4 w-4" />
                  <span>View</span>
                </button>
                <button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  <Download className="h-4 w-4 text-gray-600" />
                </button>
                <button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  <Share2 className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DigiLocker Integration */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Award className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">DigiLocker Integration</h3>
            <p className="text-sm text-gray-600">All your certificates are automatically synced to your DigiLocker account</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">5</div>
            <div className="text-sm text-gray-600">Certificates Synced</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">100%</div>
            <div className="text-sm text-gray-600">Verification Rate</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">Ready</div>
            <div className="text-sm text-gray-600">For College/Job Use</div>
          </div>
        </div>
      </div>

      {/* Achievement Progress */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Achievements</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">District Green Ambassador</span>
                <span className="text-sm text-gray-500">35/50 trees</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Carbon Offset Master</span>
                <span className="text-sm text-gray-500">420/1000 kg CO₂</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Certificate Details</h3>
                <button 
                  onClick={() => setSelectedCertificate(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{selectedCertificate.title}</h4>
                  <p className="text-gray-600 mb-4">{selectedCertificate.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Issuer:</span>
                      <p className="text-gray-600">{selectedCertificate.issuer}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Issue Date:</span>
                      <p className="text-gray-600">{selectedCertificate.issueDate}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Credential ID:</span>
                      <p className="text-gray-600">{selectedCertificate.credentialId}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Status:</span>
                      <p className="text-green-600 font-medium">{selectedCertificate.status}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                    Download PDF
                  </button>
                  <button className="flex-1 border border-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    Share Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;