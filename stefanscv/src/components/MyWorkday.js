import React from 'react';
import { Chart } from 'react-google-charts';
import Heading from './Heading';

export default function MyWorkday() {
  const data = [
    ['Task', 'Hours per Day'],
    ['Development', 6],
    ['Architecture', 6],
    ['Leading Team', 3],
    ['Business support', 2],
    ['Production support', 2],
  ];

  const options = {
    legend: { position: 'right', textStyle: { color: 'black', fontSize: 14 } },
    //fontSize: 10
    //title: "My Daily Activities",
    //fontName
  };

  return (
    <div style={{ marginBottom: '25px' }}>
      <Heading label="My Workday" />
      <Chart chartType="PieChart" data={data} options={options} width={'90%'} height={'90%'} />
    </div>
  );
}
