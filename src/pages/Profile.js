import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCoins, FaTrophy, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Amina K.',
    bio: 'Tech entrepreneur passionate about African innovation and community building.',
    location: 'Nairobi, Kenya',
    points: 15420,
    level: 15,
    badge: 'Gold Contributor'
  });

  const achievements = [
    { id: 1, name: 'First Post', description: 'Created your first community post', icon: '📝', unlocked: true },
    { id: 2, name: 'Community Builder', description: 'Helped 100+ users', icon: '🤝', unlocked: true },
    { id: 3, name: 'Top Contributor', description: 'Reached top 10 leaderboard', icon: '🏆', unlocked: true },
    { id: 4, name: 'Media Master', description: 'Shared 50+ media posts', icon: '📸', unlocked: false },
    { id: 5, name: 'Mentor', description: 'Mentored 10 new users', icon: '👨‍🏫', unlocked: false },
  ];

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated! (Simulated)');
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original values if needed
  };

  return (
    <motion.div
      className="profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="profile-header">
        <motion.div
          className="profile-avatar"
          whileHover={{ scale: 1.1 }}
        >
          <FaUser />
        </motion.div>
        <div className="profile-info">
          {isEditing ? (
            <div className="edit-form">
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                className="edit-input"
              />
              <textarea
                value={userInfo.bio}
                onChange={(e) => setUserInfo({...userInfo, bio: e.target.value})}
                className="edit-textarea"
                rows={3}
              />
              <input
                type="text"
                value={userInfo.location}
                onChange={(e) => setUserInfo({...userInfo, location: e.target.value})}
                className="edit-input"
              />
              <div className="edit-actions">
                <button onClick={handleSave} className="save-btn">
                  <FaCheck /> Save
                </button>
                <button onClick={handleCancel} className="cancel-btn">
                  <FaTimes /> Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <h1>{userInfo.name}</h1>
              <p className="bio">{userInfo.bio}</p>
              <p className="location">{userInfo.location}</p>
              <button onClick={() => setIsEditing(true)} className="edit-btn">
                <FaEdit /> Edit Profile
              </button>
            </>
          )}
        </div>
      </div>

      <div className="stats-section">
        <motion.div className="stat-item" whileHover={{ scale: 1.05 }}>
          <FaCoins className="stat-icon" />
          <div>
            <h3>{userInfo.points.toLocaleString()}</h3>
            <p>Points Earned</p>
          </div>
        </motion.div>

        <motion.div className="stat-item" whileHover={{ scale: 1.05 }}>
          <FaTrophy className="stat-icon" />
          <div>
            <h3>Level {userInfo.level}</h3>
            <p>Current Level</p>
          </div>
        </motion.div>

        <motion.div className="stat-item" whileHover={{ scale: 1.05 }}>
          <FaCheck className="stat-icon" />
          <div>
            <h3>{userInfo.badge}</h3>
            <p>Achievement Badge</p>
          </div>
        </motion.div>
      </div>

      <motion.section
        className="achievements-section"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2>Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
              whileHover={{ scale: 1.05 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="achievement-icon">
                {achievement.unlocked ? achievement.icon : '🔒'}
              </div>
              <h3>{achievement.name}</h3>
              <p>{achievement.description}</p>
              {achievement.unlocked && (
                <div className="unlocked-badge">
                  <FaCheck />
                  Unlocked
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="progress-section"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2>Level Progress</h2>
        <div className="progress-container">
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </div>
          <div className="progress-text">
            <span>15,420 / 20,000 points to Level 16</span>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Profile;