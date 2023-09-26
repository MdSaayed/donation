import React from 'react';
import Chart from 'react-apexcharts';

const PiChart = () => {
  const totalDonations = 12;
  const donationsMade = JSON.parse(localStorage.getItem('donation-item'))?.length || 0;

  const chartData = [donationsMade, totalDonations - donationsMade];

  const options = {
    labels: ['Your Donation', 'Total Donation'],
    colors: ['#00C49F', '#FF444A'],
    legend: {
      position: 'bottom',
    },
  };

  return (
    <React.Fragment>
      <div className='flex items-center justify-center h-[100vh] w-full'>
        <Chart
          type='pie'
          width={600}
          height={300}
          series={chartData}
          options={options}
        />
      </div>
    </React.Fragment>
  );
}

export default PiChart;




