import React, { useState } from 'react';
import { Trophy, Users, TreePine, Award, Crown, Medal } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'individual' | 'clans'>('individual');

  const topUsers = [
    {
      rank: 1,
      name: 'Arjun Sharma',
      location: 'Delhi NCR',
      treesPlanted: 89,
      greenPoints: 4250,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      badge: 'Green Guardian',
      streak: 45
    },
    {
      rank: 2,
      name: 'Priya Patel',
      location: 'Mumbai',
      treesPlanted: 76,
      greenPoints: 3890,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      badge: 'Tree Nurturer',
      streak: 32
    },
    {
      rank: 3,
      name: 'Rahul Kumar',
      location: 'Bangalore',
      treesPlanted: 68,
      greenPoints: 3520,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      badge: 'Eco Warrior',
      streak: 28
    },
    {
      rank: 4,
      name: 'Sneha Verma',
      location: 'Pune',
      treesPlanted: 62,
      greenPoints: 3180,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      badge: 'Nature Lover',
      streak: 22
    },
    {
      rank: 5,
      name: 'Mayank Yadav',
      location: 'Jaipur',
      treesPlanted: 58,
      greenPoints: 2940,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      badge: 'Green Thumb',
      streak: 19
    }
  ];

  const topClans = [
    {
      rank: 1,
      name: 'Delhi Green Warriors',
      members: 156,
      totalTrees: 1240,
      avgPoints: 2850,
      leader: 'Arjun Sharma',
      badge: 'Elite Clan'
    },
    {
      rank: 2,
      name: 'Mumbai Eco Squad',
      members: 142,
      totalTrees: 1180,
      avgPoints: 2620,
      leader: 'Priya Patel',
      badge: 'Champion Clan'
    },
    {
      rank: 3,
      name: 'Bangalore Forest Club',
      members: 134,
      totalTrees: 1050,
      avgPoints: 2480,
      leader: 'Rahul Kumar',
      badge: 'Rising Stars'
    },
    {
      rank: 4,
      name: 'Pune Nature Society',
      members: 128,
      totalTrees: 980,
      avgPoints: 2350,
      leader: 'Sneha Verma',
      badge: 'Dedicated Clan'
    },
    {
      rank: 5,
      name: 'Jaipur Green Team',
      members: 119,
      totalTrees: 920,
      avgPoints: 2200,
      leader: 'Vikram Singh',
      badge: 'Growing Strong'
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Award className="h-6 w-6 text-amber-600" />;
      default: return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getRankBgColor = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-400 to-yellow-500';
      case 2: return 'bg-gradient-to-r from-gray-300 to-gray-400';
      case 3: return 'bg-gradient-to-r from-amber-400 to-amber-500';
      default: return 'bg-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Leaderboard</h2>
        <p className="text-purple-100 mb-6">Celebrate the champions of environmental change</p>
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">Your Rank</div>
            <div className="text-purple-100">#7 in Delhi NCR</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">This Month</div>
            <div className="text-purple-100">+12 positions</div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl p-1 shadow-sm border border-gray-100">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveTab('individual')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
              activeTab === 'individual'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Individual Leaders
          </button>
          <button
            onClick={() => setActiveTab('clans')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
              activeTab === 'clans'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Green Clans
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'individual' ? (
        <div className="space-y-4">
          {topUsers.map((user) => (
            <div 
              key={user.rank} 
              className={`rounded-xl p-6 shadow-sm border transition-all hover:shadow-md ${
                user.rank <= 3 ? `${getRankBgColor(user.rank)} text-white` : 'bg-white border-gray-100'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {getRankIcon(user.rank)}
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h3 className={`text-xl font-bold ${user.rank <= 3 ? 'text-white' : 'text-gray-900'}`}>
                      {user.name}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      user.rank <= 3 
                        ? 'bg-white/20 text-white' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {user.badge}
                    </span>
                  </div>
                  <p className={`text-sm ${user.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                    {user.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${user.rank <= 3 ? 'text-white' : 'text-gray-900'}`}>
                        {user.treesPlanted}
                      </div>
                      <div className={`text-sm ${user.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                        Trees
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${user.rank <= 3 ? 'text-white' : 'text-gray-900'}`}>
                        {user.greenPoints.toLocaleString()}
                      </div>
                      <div className={`text-sm ${user.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                        Points
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${user.rank <= 3 ? 'text-white' : 'text-gray-900'}`}>
                        {user.streak}
                      </div>
                      <div className={`text-sm ${user.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                        Day Streak
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {topClans.map((clan) => (
            <div 
              key={clan.rank} 
              className={`rounded-xl p-6 shadow-sm border transition-all hover:shadow-md ${
                clan.rank <= 3 ? `${getRankBgColor(clan.rank)} text-white` : 'bg-white border-gray-100'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {getRankIcon(clan.rank)}
                </div>
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    clan.rank <= 3 ? 'bg-white/20' : 'bg-purple-100'
                  }`}>
                    <Users className={`h-8 w-8 ${clan.rank <= 3 ? 'text-white' : 'text-purple-600'}`} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h3 className={`text-xl font-bold ${clan.rank <= 3 ? 'text-white' : 'text-gray-900'}`}>
                      {clan.name}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      clan.rank <= 3 
                        ? 'bg-white/20 text-white' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {clan.badge}
                    </span>
                  </div>
                  <p className={`text-sm ${clan.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                    Leader: {clan.leader}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${clan.rank <= 3 ? 'text-white' : 'text-gray-900'}`}>
                        {clan.members}
                      </div>
                      <div className={`text-sm ${clan.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                        Members
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${clan.rank <= 3 ? 'text-white' : 'text-gray-900'}`}>
                        {clan.totalTrees.toLocaleString()}
                      </div>
                      <div className={`text-sm ${clan.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                        Trees
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${clan.rank <= 3 ? 'text-white' : 'text-gray-900'}`}>
                        {clan.avgPoints.toLocaleString()}
                      </div>
                      <div className={`text-sm ${clan.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                        Avg Points
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Your Progress */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress This Month</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">12</div>
            <div className="text-sm text-gray-600">Trees Planted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">850</div>
            <div className="text-sm text-gray-600">Points Earned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">+12</div>
            <div className="text-sm text-gray-600">Rank Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">28</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
