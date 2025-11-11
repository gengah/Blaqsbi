import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaHeart, FaComment, FaShare, FaPlay, FaVolumeUp, FaMapMarkerAlt } from 'react-icons/fa';
import './Huddles.css';

const Huddles = () => {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [newPost, setNewPost] = useState('');

  const countries = ['All', 'Kenya', 'Nigeria', 'South Africa', 'Ghana'];

  const posts = [
    {
      id: 1,
      author: 'Amina K.',
      country: 'Kenya',
      content: 'Excited to share my latest project on sustainable farming! 🌱 #AgriTech #Kenya',
      points: 245,
      likes: 42,
      comments: 8,
      type: 'text',
      time: '2h ago'
    },
    {
      id: 2,
      author: 'Jomo W.',
      country: 'Nigeria',
      content: 'Check out this amazing Afrobeat track I produced! 🎵',
      points: 189,
      likes: 67,
      comments: 15,
      type: 'audio',
      mediaUrl: 'https://example.com/audio.mp3',
      time: '4h ago'
    },
    {
      id: 3,
      author: 'Zara M.',
      country: 'South Africa',
      content: 'Beautiful sunset over Table Mountain today! 📸',
      points: 156,
      likes: 89,
      comments: 12,
      type: 'image',
      mediaUrl: 'https://example.com/image.jpg',
      time: '6h ago'
    },
    {
      id: 4,
      author: 'Kofi A.',
      country: 'Ghana',
      content: 'New video on traditional Ghanaian cooking techniques! 👨‍🍳',
      points: 298,
      likes: 134,
      comments: 23,
      type: 'video',
      mediaUrl: 'https://example.com/video.mp4',
      time: '8h ago'
    }
  ];

  const filteredPosts = selectedCountry === 'All' ? posts : posts.filter(post => post.country === selectedCountry);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Simulate posting
    alert('Post created! (Simulated)');
    setNewPost('');
  };

  return (
    <motion.div
      className="huddles"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="huddles-header">
        <h1>Huddles</h1>
        <div className="country-filter">
          {countries.map(country => (
            <button
              key={country}
              className={`country-btn ${selectedCountry === country ? 'active' : ''}`}
              onClick={() => setSelectedCountry(country)}
            >
              <FaMapMarkerAlt />
              {country}
            </button>
          ))}
        </div>
      </div>

      <motion.form
        className="post-form"
        onSubmit={handlePostSubmit}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <textarea
          placeholder="Share your thoughts with the community..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          rows={3}
        />
        <button type="submit" className="post-btn">
          <FaPlus /> Post
        </button>
      </motion.form>

      <div className="posts-container">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="post-card"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="post-header">
              <div className="author-info">
                <div className="avatar">{post.author[0]}</div>
                <div>
                  <h4>{post.author}</h4>
                  <span className="country-tag">{post.country}</span>
                  <span className="post-time">{post.time}</span>
                </div>
              </div>
              <div className="points-badge">
                <FaHeart />
                {post.points} pts
              </div>
            </div>

            <div className="post-content">
              <p>{post.content}</p>
              {post.type === 'audio' && (
                <div className="media-player audio-player">
                  <FaVolumeUp />
                  <span>Audio Content</span>
                  <button className="play-btn"><FaPlay /></button>
                </div>
              )}
              {post.type === 'video' && (
                <div className="media-player video-player">
                  <FaPlay />
                  <span>Video Content</span>
                  <button className="play-btn"><FaPlay /></button>
                </div>
              )}
              {post.type === 'image' && (
                <div className="media-player image-player">
                  <span>Image Content</span>
                </div>
              )}
            </div>

            <div className="post-actions">
              <button className="action-btn">
                <FaHeart /> {post.likes}
              </button>
              <button className="action-btn">
                <FaComment /> {post.comments}
              </button>
              <button className="action-btn">
                <FaShare />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Huddles;