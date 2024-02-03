import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  return token ? (
    <div className="background">
      <div className="dashboard-content">
        <h1>Welcone to Dashboard</h1>
      </div>
    </div>
  ) : null;
};

export default Dashboard;
