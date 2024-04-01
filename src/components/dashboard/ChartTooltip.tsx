import React from 'react';

type TChartTooltipProps = {
	kpi: string;
	colors: {
		stroke: string;
		fill: string;
	};
	label?: string;
	active?: boolean;
	payload?: any[];
	coordinate?: {
		x: number;
		y: number;
	};
};

const ChartTooltip = ({
	kpi,
	colors,
	coordinate,
	label,
	payload,
	active,
}: TChartTooltipProps) => {
	if (active && payload && payload.length && coordinate) {
		const dataPoint = payload[0].payload;

		const tooltipStyle = {
			left: coordinate.x,
			top: coordinate.y,
		};

		return (
			<div
				className="flex flex-col items-start justify-center rounded-lg border border-black p-1 text-zinc-50"
				style={tooltipStyle}>
				<div
					className="absolute"
					style={{
						width: 0,
						height: 0,
						borderTop: '10px solid transparent',
						borderBottom: '10px solid transparent',
						borderRight: '10px solid rgba(0, 0, 0, 0.7)',
						left: '-10px',
					}}
				/>
				<p className="flex text-xs font-semibold">{label}</p>
				<p className="text-xs">
					<span
						className="mr-1"
						style={{
							width: '0.5px',
							height: '0.5px',
							border: `1px solid ${colors?.stroke}`,
							backgroundColor: colors?.fill,
						}}>
						&nbsp;&nbsp;&nbsp;&nbsp;
					</span>
					{`${kpi}: ${dataPoint.value}`}
				</p>
			</div>
		);
	}

	return null;
};

export {ChartTooltip};
