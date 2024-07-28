import React from 'react';
import "../Asset/CSSfiles/Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">TESTIMONIALS</h2>
      <div className="testimonial">
        <p className="testimonial-text">
          "The fitness programs offered here are top-notch. I've seen significant improvement in my strength and flexibility."
        </p>
        <p className="testimonial-author">- Emily Parker</p>
      </div>
      <div className="testimonial">
        <p className="testimonial-text">
          "I love the variety of workouts available. It keeps me motivated and excited to exercise every day."
        </p>
        <p className="testimonial-author">- Mark Thompson</p>
      </div>
      <div className="testimonial">
        <p className="testimonial-text">
          "The trainers are incredibly knowledgeable and supportive. They really push you to achieve your fitness goals."
        </p>
        <p className="testimonial-author">- Samantha Lee</p>
      </div>
      <div className="testimonial">
        <p className="testimonial-text">
          "Joining this fitness community has been life-changing. I feel healthier and more energized than ever before."
        </p>
        <p className="testimonial-author">- James Roberts</p>
      </div>
    </div>
  );
};

export default Testimonials;
