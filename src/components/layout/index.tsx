import {PropsWithChildren} from 'react';
import {Breadcrumb} from '../breadcrumb';
import {Menu} from '../menu';

export const Layout: React.FC<PropsWithChildren> = ({children}) => {
	return (
		<div className="layout">
			<Menu />
			<div className="content">
				<Breadcrumb />
				<div className="bg-zinc-100 p-4">{children}</div>
			</div>
		</div>
	);
};
