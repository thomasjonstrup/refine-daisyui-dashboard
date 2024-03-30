type TKpiCardProps = {
	title: string;
	data: any;
	icon: JSX.Element;
	colors: {
		stroke: string;
		fill: string;
	};
	formatTotal: (value: number | string) => typeof value;
}

const KpiCard = ({ colors, data, icon, title, formatTotal }: TKpiCardProps) => {
	const total = data?.data?.total;
	const trend = data?.data?.trend;
	const calc = Math.round((trend / total) * 100);
	const percent = total > trend ? `+ ${calc}%` : `- ${calc}%`;
	const textColor = total > trend ? "seagreen" : "crimson";

	return (
		<div className='stat my-2 py-4 flex-1 bg-zinc-50 border-l-4 rounded' style={{ borderColor: colors?.stroke }}>
			<div className="stat-figure text-center" style={{ color: colors?.fill }}>
				{icon}
			</div>
			<h2 className="stat-title text-l">{title}</h2>
			<p className="stat-value">{formatTotal(total ?? '')}</p>
			<p className="stat-desc my-2">
				<span className="mx-1 text-l font-bold" style={{ color: textColor }}>
					{percent}
				</span>
				since last week
			</p>
		</div>
	)
}

export default KpiCard