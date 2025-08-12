import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceChart: React.FC = () => {
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

  const labels = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Class Average',
        data: [85, 78, 82, 88, 92, 79],
        backgroundColor: 'rgba(13, 110, 253, 0.8)',
      },
      {
        label: 'School Average',
        data: [82, 75, 80, 85, 89, 76],
        backgroundColor: 'rgba(25, 135, 84, 0.8)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default PerformanceChart;