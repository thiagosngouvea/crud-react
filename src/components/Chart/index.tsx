import React from 'react';
import { Bar } from 'react-chartjs-2';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

interface Props {
  data: ChartData;
  options?: any; // Opções de configuração do Chart.js
}

const ChartComponent: React.FC<Props> = ({ data, options }) => {
  return <Bar data={data} options={options} />;
};

export default ChartComponent;
