import React from 'react';
import Chart from 'react-apexcharts';
import './Style.css'

const PiChart = () => {
  const totalDonations = 12;
  const donationReceived = JSON.parse(localStorage.getItem('donation-item'))?.length || 0;

  const chartData = [donationReceived, totalDonations - donationReceived];

  const options = {
    labels: ['Your Donation', 'Total Donation'],
    colors: ['#00C49F', '#FF444A'],
    legend: {
      position: 'bottom',
      markers: {
        radius: 0, 
        width: 45,
        height: 6,
        strokeWidth: 3,
      },
      fontSize: '14px',
      fontWeight: 'bold',
      textAlign: 'center'
    },
  };

  return (
    <React.Fragment>
      <div className='flex items-center justify-center h-[90vh]'>
        <Chart
          type='pie'
          width='100%'
          height={300}
          series={chartData}
          options={options}
        />
      </div>
    </React.Fragment>
  );
}

export default PiChart;
