import React from 'react';

type TChartTooltipProps = {
	kpi: string;
	colors: {
		stroke: string;
		fill: string;
	};
};

const ChartTooltip = (props: TChartTooltipProps) => {
	return <div>ChartTooltip</div>;
};

export {ChartTooltip};
