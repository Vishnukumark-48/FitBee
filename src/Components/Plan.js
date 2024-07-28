import React from 'react';
import '../Asset/CSSfiles/Plan.css';

const PlanCard = ({ title, price, features }) => {
  return (
    <div className="plan-card">
      <h2>{title}</h2>
      <p className="price">{price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={feature.includes('No') ? 'not-included' : ''}>
            {feature}
          </li>
        ))}
      </ul>        
    </div>
  );
};

const Plan = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: '₹99/month',
      features: [
        'Basic Workout Programs',
        'No Advanced Programs',
        'No Personal Trainer',
        'Progress Tracking',
      ],
    },
    {
      title: 'Pro Plan',
      price: '₹199/month',
      features: [
        'Advanced Workouts',
        'Limited Trainer Support',
        'Progress Tracking',
        'Access to Group Workouts',
      ],
    },
    {
      title: 'Premium Plan',
      price: '₹1599/year',
      features: [
        'All Workout Programs',
        'Full Trainer Support',
        'Progress Tracking',
        'Access to Live Sessions',
        'Nutritional Guidance',
      ],
    },
  ];

  return (
    <div className="plan-container">
      <h1 className="subscriptions-heading">SUBSCRIPTION PLANS</h1>
      {plans.map((plan, index) => (
        <PlanCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default Plan;
