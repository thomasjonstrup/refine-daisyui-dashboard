import {
	ResponsiveContainer,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Bar,
	BarChart,
} from 'recharts';
import {IChartDatum} from '../../interfaces';
import {ChartTooltip} from './ChartTooltip';
import {type} from 'os';

type TTResponsiveBarChartProps = {
	kpi: string;
	data: IChartDatum[];
	colors: {
		stroke: string;
		fill: string;
	};
};

const ResponsiveBarChart = ({kpi, data, colors}: TTResponsiveBarChartProps) => {
	return (
		<ResponsiveContainer height={400}>
			<BarChart
				data={data}
				height={400}
				margin={{top: 10, right: 30, left: 0, bottom: 0}}>
				<CartesianGrid strokeDasharray="0 0" />
				<XAxis
					dataKey="date"
					tickCount={data?.length ?? 0}
					tick={{
						stroke: 'light-grey',
						strokeWidth: 0.5,
						fontSize: '12px',
					}}
				/>
				<YAxis
					domain={[0, 'dataMax']}
					tickCount={13}
					tick={{
						stroke: 'light-grey',
						strokeWidth: 0.5,
						fontSize: '12px',
					}}
				/>
				<Tooltip
					content={<ChartTooltip kpi={kpi} colors={colors} />}
					wrapperStyle={{
						backgroundColor: 'rgba(0, 0, 0, 0.7)',
						border: '0 solid #000',
						borderRadius: '10px',
					}}
				/>
				<Bar
					type="monotone"
					dataKey="value"
					stroke="rgb(255, 207, 159)"
					strokeWidth={1}
					fill="rgba(255, 207, 159, 0.7)"
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

export {ResponsiveBarChart};
