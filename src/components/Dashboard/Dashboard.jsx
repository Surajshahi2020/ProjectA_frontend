import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(70, 130, 180, 0.7)', 
        borderColor: 'rgba(70, 130, 180, 1)', 
        borderWidth: 2,
        borderRadius: 8, 
        color: 'rgba(255, 255, 255, 0.9)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'rgba(255, 255, 255, 0.9)', // Y-axis label color (white)
          font: {
            weight: 'bold', // Make the Y-axis label bold
          },
        },
        grid: {
          display: false, // Hide Y-axis grid lines
        },
      },
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.9)', // X-axis label color (white)
          font: {
            weight: 'bold', // Make the X-axis label bold
          },
        },
        grid: {
          display: false, // Hide X-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };


  return token ? (
    <div className="background">
      <div className="dashboard-content">
        <Bar data={data} options={options} />
      </div>
    </div>
  ) : null;
};

export default Dashboard;
