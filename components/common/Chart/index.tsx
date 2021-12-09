import { FC } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js'
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, BarElement);

const BarChart: FC = () => (
	<Bar
		width={100}
		height={50}
		options={{ maintainAspectRatio: false }}
		data={{
			labels: ['Red', 'Blue', 'Yellow'],
        	datasets: [{
				data: [1, 2, 3],
				backgroundColor: [
					'red',
					'blue',
					'yellow',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
				],
				borderWidth: 1
			}]
		}}
	/>
);

export default BarChart;
