import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AttendanceChart: React.FC = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Class 10A',
        data: [95, 92, 88, 94, 96, 90],
        borderColor: 'rgb(13, 110, 253)',
        backgroundColor: 'rgba(13, 110, 253, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Class 10B',
        data: [88, 90, 85, 92, 89, 87],
        borderColor: 'rgb(25, 135, 84)',
        backgroundColor: 'rgba(25, 135, 84, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Class 9A',
        data: [92, 94, 90, 88, 93, 91],
        borderColor: 'rgb(220, 53, 69)',
        backgroundColor: 'rgba(220, 53, 69, 0.1)',
        tension: 0.4,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default AttendanceChart;