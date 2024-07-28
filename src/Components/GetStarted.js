import React from 'react';
import "../Asset/CSSfiles/GetStarted.css";

const programs = [
  { title: 'BODY BUILDING', description: 'Build muscle mass and strength with our intensive bodybuilding programs.', icon: require('../Asset/images/bodybuilding.png') },
  { title: 'CARDIO STRENGTH', description: 'Improve your cardiovascular health and endurance with our cardio strength classes.', icon: require('../Asset/images/heart.png') },
  { title: 'WEIGHT LIFTING', description: 'Enhance your strength and technique with our weight lifting sessions.', icon: require('../Asset/images/weightlifting.png') },
  { title: 'TOTAL BODY', description: 'Achieve overall fitness and tone your entire body with our total body workouts.', icon: require('../Asset/images/gym.png') },
  { title: 'JOGGING & RUNNING', description: 'Boost your stamina and cardiovascular health with our jogging and running programs.', icon: require('../Asset/images/running.png') },
  { title: 'YOGA & MEDITATION', description: 'Find balance and peace with our yoga and meditation classes.', icon: require('../Asset/images/yoga.png') },
  { title: 'HIIT TRAINING', description: 'Burn calories and increase your metabolism with our high-intensity interval training.', icon: require('../Asset/images/person.png') },
  { title: 'CROSSFIT', description: 'Experience the intensity and community of CrossFit with our dedicated programs.', icon: require('../Asset/images/workout.png') },
];

const GetStarted = () => {
  return (
    <section className="get-started">
      <h2>CLASSES</h2>
      <h1>FITNESS PROGRAMS AT FITBEE</h1>
      <div className="programs-container">
        {programs.map((program, index) => (
          <div key={index} className="program">
            <img src={program.icon} alt={program.title} />
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;
