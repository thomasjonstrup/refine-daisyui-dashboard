import {GetListResponse} from '@refinedev/core';
import {
	CurrencyDollarIcon,
	ShoppingCartIcon,
	UserGroupIcon,
} from '@heroicons/react/24/outline';

import {IChartDatum} from '../../interfaces';
import KpiCard from './KpiCard';

type TStatsProps = {
	dailyRevenue?: GetListResponse<IChartDatum>;
	dailyOrders?: GetListResponse<IChartDatum>;
	newCustomers?: GetListResponse<IChartDatum>;
};

const Stats = ({dailyOrders, dailyRevenue, newCustomers}: TStatsProps) => {
	return (
		<div className="mx-auto mb-4 flex w-full flex-col items-stretch justify-center drop-shadow-md md:flex-row md:justify-between">
			<div className="mx-auto w-full md:mr-2 md:flex-1">
				<KpiCard
					title="Weekly Revenue"
					data={dailyRevenue}
					formatTotal={(value) => `$ ${value}`}
					icon={<CurrencyDollarIcon className="h-32 w-32" />}
					colors={{
						stroke: 'rgb(54, 162, 235)',
						fill: 'rgb(54, 162, 235, 0.2)',
					}}
				/>
			</div>
			<div className="mx-auto w-full md:mr-2 md:flex-1">
				<KpiCard
					title="Weekly Orders"
					data={dailyOrders}
					formatTotal={(value) => `$ ${value}`}
					icon={<CurrencyDollarIcon className="h-32 w-32" />}
					colors={{
						stroke: 'rgb(255, 159, 64)',
						fill: 'rgba(255, 159, 64, 0.2)',
					}}
				/>
			</div>
			<div className="mx-auto w-full md:mr-2 md:flex-1">
				<KpiCard
					title="New Customers"
					data={newCustomers}
					formatTotal={(value) => `$ ${value}`}
					icon={<CurrencyDollarIcon className="h-32 w-32" />}
					colors={{
						stroke: 'rgb(76, 175, 80)',
						fill: 'rgba(76, 175, 80, 0.2)',
					}}
				/>
			</div>
		</div>
	);
};

export default Stats;
