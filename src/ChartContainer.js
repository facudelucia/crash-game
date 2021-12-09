import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
);

const ChartContainer = ({ multiplier }) => {

    const options = {
        responsive: true,
        maintainAspectRatio: false
    };

    const labels = [1, 1, 1];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [0, 0.3, multiplier],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                lineTension: 0.8
            }
        ],
    };

    return (
        <div className="chart-container">
            <Line options={options} data={data} />
        </div>
    )
}

export default ChartContainer
