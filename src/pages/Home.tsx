import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Tooltip } from '../components/ui/tooltip';
import {Button} from '../components/ui/button';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Poker Night Availability App</h1>
      <Tooltip showArrow content="This is the tooltip content">
      <p>hover</p>
    </Tooltip>
      <p>
        Welcome to the Poker Night Availability App! Coordinate your poker nights easily with friends. Check your availability and schedule your next game night!
      </p>
      <div className="home-links">
        
        <Link to="/login" className="home-link">Login</Link>
        <Link to="/signup" className="home-link">Signup</Link>
      </div>
    </div>
  );
};

export default Home;
