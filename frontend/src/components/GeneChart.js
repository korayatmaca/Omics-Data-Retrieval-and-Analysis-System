import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './GeneChart.css';

// Register the chart.js components we will be using
ChartJS.register(...registerables);

function GeneChart({ geneDataEntries }) {
  // Assuming that 'geneDataEntries' is an array of objects structured like your JSON data
  // and 'geneDataEntries' has been set in the state of the parent component where data is fetched.
  const labels = geneDataEntries.map((data) => data.gene);
  const expressionValues = geneDataEntries.map((data) => data.expressionValues);
  // Add more datasets for exper_rep1, exper_rep2, etc., if needed
  
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Expression Values',
        data: expressionValues,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      // Include additional datasets for other replicates here as necessary
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: true // Set to true for responsive width with fixed height
  };

  return (
    <div className="chart-container"> {/* Use the class from your CSS */}
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default GeneChart;
