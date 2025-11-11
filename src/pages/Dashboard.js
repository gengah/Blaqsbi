import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { FaUsers, FaCoins, FaTrophy, FaChartLine } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const userStats = {
    totalUsers: 12543,
    activeUsers: 8921,
    totalPoints: 456789,
    premiumUsers: 2341
  };

  const engagementData = [
    { name: 'Jan', posts: 400, comments: 240, likes: 120 },
    { name: 'Feb', posts: 300, comments: 139, likes: 221 },
    { name: 'Mar', posts: 200, comments: 980, likes: 229 },
    { name: 'Apr', posts: 278, comments: 390, likes: 200 },
    { name: 'May', posts: 189, comments: 480, likes: 218 },
    { name: 'Jun', posts: 239, comments: 380, likes: 250 },
  ];

  const pointsDistribution = [
    { name: 'Kenya', value: 35, color: '#8884d8' },
    { name: 'Nigeria', value: 30, color: '#82ca9d' },
    { name: 'South Africa', value: 20, color: '#ffc658' },
    { name: 'Ghana', value: 10, color: '#ff7c7c' },
    { name: 'Others', value: 5, color: '#8dd1e1' },
  ];

  const leaderboard = [
    { name: 'Amina K.', points: 15420, badge: 'Gold' },
    { name: 'Jomo W.', points: 12890, badge: 'Silver' },
    { name: 'Zara M.', points: 11250, badge: 'Bronze' },
    { name: 'Kofi A.', points: 9870, badge: 'Bronze' },
    { name: 'Nala T.', points: 8760, badge: 'Bronze' },
  ];

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
          <FaUsers className="stat-icon" />
          <div>
            <h3>{userStats.totalUsers.toLocaleString()}</h3>
            <p>Total Users</p>
          </div>
        </motion.div>

        <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
          <FaChartLine className="stat-icon" />
          <div>
            <h3>{userStats.activeUsers.toLocaleString()}</h3>
            <p>Active Users</p>
          </div>
        </motion.div>

        <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
          <FaCoins className="stat-icon" />
          <div>
            <h3>{userStats.totalPoints.toLocaleString()}</h3>
            <p>Total Points</p>
          </div>
        </motion.div>

        <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
          <FaTrophy className="stat-icon" />
          <div>
            <h3>{userStats.premiumUsers.toLocaleString()}</h3>
            <p>Premium Users</p>
          </div>
        </motion.div>
      </div>

      <div className="charts-grid">
        <motion.div className="chart-card" whileHover={{ scale: 1.02 }}>
          <h3>Engagement Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="posts" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="comments" stroke="#82ca9d" strokeWidth={2} />
              <Line type="monotone" dataKey="likes" stroke="#ffc658" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div className="chart-card" whileHover={{ scale: 1.02 }}>
          <h3>Points Distribution by Country</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pointsDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pointsDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div className="leaderboard-card" whileHover={{ scale: 1.02 }}>
        <h3>Top Contributors</h3>
        <div className="leaderboard-list">
          {leaderboard.map((user, index) => (
            <div key={index} className="leaderboard-item">
              <span className="rank">#{index + 1}</span>
              <span className="name">{user.name}</span>
              <span className="points">{user.points.toLocaleString()} pts</span>
              <span className={`badge ${user.badge.toLowerCase()}`}>{user.badge}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;