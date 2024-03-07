import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  const barChartData = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
    datasets: [
      {
        label: 'Bar 1',
        data: [50, 70, 60, 100],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
      {
        label: 'Bar 2',
        data: [30, 40, 70, 89],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
      },
    ],
  };

  const pieChartData = {
    labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
    datasets: [
      {
        data: [30, 40, 30, 44, 33],
        backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 205, 86, 0.7)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 205, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 2,
      },
    ],
  };


  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [30, 45, 60, 25, 70],
        fill: false,
        // borderColor: 'rgba(75,192,192,1)',
        borderColor: '',
        tension: 0.4,
      },
    ],
  };

  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'rgba(255, 255, 255, 0.9)', // Set color for y-axis labels
          font: {
            weight: 'bold',
          },
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.9)', // Set color for x-axis labels
          font: {
            weight: 'bold',
          },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const pieChartOptions = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: 'rgba(255, 255, 255, 0.9)', // Set color for labels
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
  };

  const lineChartOptions = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.9)', // Adjust color as needed
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.9)', // Adjust color as needed
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color: 'rgba(255, 255, 255, 0.9)', // Adjust color as needed
        },
      },
    },
  };

  return token ? (
    <div className="background">
      <EuiFlexGroup>
        <EuiFlexItem>
          <div className="dashboard-content">

            <div className="chart" style={{ marginBottom: '4px' }}>
              <Bar data={barChartData} options={barChartOptions} width={400} height={150} />
            </div>

            <div className="chart">
              <Doughnut data={pieChartData} options={pieChartOptions} width={250} height={40} />
            </div>

            <div className="chart">
              <Line data={lineChartData} options={lineChartOptions} width={400} height={180} />
            </div>
          </div>
        </EuiFlexItem>
      </EuiFlexGroup>

      <div className="newly-added">
        <table id="latest-info">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Created By</th>
            </tr>
            <tr>
              <td>1</td>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>1</td>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>1</td>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>1</td>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>1</td>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>1</td>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>1</td>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr><tr>
              <td>1</td>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr><tr>
              <td>1</td>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr><tr>
              <td>1</td>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>1</td>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>1</td>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr> <tr>
              <td>1</td>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>2080-11-11</td>
              <td>2080-11-11</td>
            </tr>
        </table>
      </div>
    </div>
  ) : null;
};
export default Dashboard;