import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCoins, FaCrown, FaShoppingCart, FaStar, FaCheck } from 'react-icons/fa';
import './Marketplace.css';

const Marketplace = () => {
  const [userPoints, setUserPoints] = useState(2500);

  const premiumTiers = [
    {
      id: 1,
      name: 'Bronze',
      price: 500,
      benefits: ['Priority posting', 'Custom badge', 'Ad-free experience'],
      color: '#cd7f32'
    },
    {
      id: 2,
      name: 'Silver',
      price: 1000,
      benefits: ['All Bronze benefits', 'Exclusive huddles', 'Analytics dashboard', 'Premium support'],
      color: '#c0c0c0'
    },
    {
      id: 3,
      name: 'Gold',
      price: 2000,
      benefits: ['All Silver benefits', 'Featured posts', 'Monetization tools', 'VIP events access'],
      color: '#ffd700'
    }
  ];

  const rewards = [
    {
      id: 1,
      name: 'Custom Theme',
      description: 'Personalize your profile with a unique color scheme',
      cost: 300,
      type: 'theme'
    },
    {
      id: 2,
      name: 'Premium Badge',
      description: 'Show off your status with an exclusive badge',
      cost: 500,
      type: 'badge'
    },
    {
      id: 3,
      name: 'Extra Storage',
      description: 'Increase your media storage limit by 50%',
      cost: 200,
      type: 'storage'
    },
    {
      id: 4,
      name: 'Ad-Free Month',
      description: 'Enjoy a month without any advertisements',
      cost: 150,
      type: 'adfree'
    }
  ];

  const handlePurchase = (item, type) => {
    if (userPoints >= item.price || userPoints >= item.cost) {
      const cost = item.price || item.cost;
      setUserPoints(userPoints - cost);
      alert(`${type === 'tier' ? 'Premium tier' : 'Reward'} purchased successfully! (Simulated)`);
    } else {
      alert('Insufficient points!');
    }
  };

  return (
    <motion.div
      className="marketplace"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="marketplace-header">
        <h1>Marketplace</h1>
        <div className="points-display">
          <FaCoins />
          <span>{userPoints.toLocaleString()} Points</span>
        </div>
      </div>

      <motion.section
        className="premium-section"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Premium Tiers</h2>
        <div className="tiers-grid">
          {premiumTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className="tier-card"
              whileHover={{ scale: 1.05 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              style={{ borderColor: tier.color }}
            >
              <div className="tier-header" style={{ background: tier.color }}>
                <FaCrown />
                <h3>{tier.name}</h3>
              </div>
              <div className="tier-price">
                <FaCoins />
                <span>{tier.price} points</span>
              </div>
              <ul className="tier-benefits">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <FaCheck />
                    {benefit}
                  </li>
                ))}
              </ul>
              <button
                className="purchase-btn"
                onClick={() => handlePurchase(tier, 'tier')}
                disabled={userPoints < tier.price}
              >
                <FaShoppingCart />
                Upgrade
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="rewards-section"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2>Rewards Store</h2>
        <div className="rewards-grid">
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.id}
              className="reward-card"
              whileHover={{ scale: 1.05 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="reward-icon">
                {reward.type === 'theme' && <FaStar />}
                {reward.type === 'badge' && <FaCrown />}
                {reward.type === 'storage' && <FaCoins />}
                {reward.type === 'adfree' && <FaCheck />}
              </div>
              <h3>{reward.name}</h3>
              <p>{reward.description}</p>
              <div className="reward-cost">
                <FaCoins />
                <span>{reward.cost} points</span>
              </div>
              <button
                className="purchase-btn"
                onClick={() => handlePurchase(reward, 'reward')}
                disabled={userPoints < reward.cost}
              >
                <FaShoppingCart />
                Redeem
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Marketplace;