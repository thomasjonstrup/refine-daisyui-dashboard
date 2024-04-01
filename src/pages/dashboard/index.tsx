import Stats from '../../components/dashboard/Stats';
import {CrudFilter, useList} from '@refinedev/core';
import dayjs from 'dayjs';
import {IChartDatum, TTab} from '../../interfaces';
import {TabView} from '../../components/dashboard/TabView';
import {ResponsiveAreaChart} from '../../components/dashboard/ResponsiveAreaChart';
import {useMemo} from 'react';

const filters: CrudFilter[] = [
	{
		field: 'start',
		operator: 'eq',
		value: dayjs()?.subtract(7, 'days')?.startOf('day'),
	},
	{
		field: 'end',
		operator: 'eq',
		value: dayjs().startOf('day'),
	},
];

const useMemoizedChartData = (d: any) => {
	return useMemo(() => {
		return d?.data?.data?.map((item: IChartDatum) => ({
			date: new Intl.DateTimeFormat('en-US', {
				month: 'short',
				year: 'numeric',
				day: 'numeric',
			}).format(new Date(item.date)),
			value: item?.value,
		}));
	}, [d]);
};

const Dashboard = () => {
	const {data: dailyRevenue} = useList<IChartDatum>({
		resource: 'dailyRevenue',
		filters,
	});
	const {data: dailyOrders} = useList<IChartDatum>({
		resource: 'dailyOrders',
		filters,
	});
	const {data: newCustomers} = useList<IChartDatum>({
		resource: 'newCustomers',
		filters,
	});

	const memoizedRevenueData = useMemoizedChartData(dailyRevenue);
	const memoizedOrdersData = useMemoizedChartData(dailyOrders);
	const memoizedNewCustomersData = useMemoizedChartData(newCustomers);

	const tabs: TTab[] = [
		{
			id: 1,
			label: 'Daily Revenue',
			content: (
				<ResponsiveAreaChart
					kpi="Daily Revenue"
					data={memoizedRevenueData}
					colors={{
						stroke: 'rgb(54, 162, 235)',
						fill: 'rgba(54, 162, 235, 0.2)',
					}}
				/>
			),
		},
		{
			id: 2,
			label: 'Daily Orders',
			content: (
				<ResponsiveAreaChart
					kpi="Daily orders"
					data={memoizedOrdersData}
					colors={{
						stroke: 'rgb(54, 162, 235)',
						fill: 'rgba(54, 162, 235, 0.2)',
					}}
				/>
			),
		},
		{
			id: 3,
			label: 'New Customers',
			content: (
				<ResponsiveAreaChart
					kpi="New customers"
					data={memoizedNewCustomersData}
					colors={{
						stroke: 'rgb(54, 162, 235)',
						fill: 'rgba(54, 162, 235, 0.2)',
					}}
				/>
			),
		},
	];

	return (
		<>
			<Stats
				dailyRevenue={dailyRevenue}
				dailyOrders={dailyOrders}
				newCustomers={newCustomers}
			/>
			<TabView tabs={tabs} />
		</>
	);
};

export {Dashboard};
