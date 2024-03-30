

import Stats from '../../components/dashboard/Stats'
import { CrudFilter, useList } from '@refinedev/core'
import dayjs from 'dayjs';
import { IChartDatum } from '../../interfaces';

const filters: CrudFilter[] = [
	{
		field: 'start',
		operator: 'eq',
		value: dayjs()?.subtract(7, 'days')?.startOf('day')
	},
	{
		field: 'end',
		operator: 'eq',
		value: dayjs().startOf('day')
	}
]

const Dashboard = () => {
	const {data: dailyRevenue} = useList<IChartDatum>({
		resource: 'dailyRevenue',
		filters
	})
	const {data: dailyOrders} = useList<IChartDatum>({
		resource: 'dailyOrders',
		filters
	})
	const {data: newCustomers} = useList<IChartDatum>({
		resource: 'newCustomers',
		filters
	})

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-3xl font-bold underline">Hello three...</h1>
					<h1 className="text-5xl font-bold">Hello three...</h1>
					<p className="py-6">
						You're here. A deva just as dashing and daisyuing - as yourself refined
					</p>
					<button className="btn btn-primary">Buckle Up</button>
					<Stats
						dailyRevenue={dailyRevenue}
						dailyOrders={dailyOrders}
						newCustomers={newCustomers}
					/>
				</div>
			</div>
		</div>
	)
}

export { Dashboard }