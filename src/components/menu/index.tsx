import {useMenu} from '@refinedev/core';
import {NavLink} from 'react-router-dom';

export const Menu = () => {
	const {menuItems} = useMenu();

	return (
		<nav className="menu sticky top-0 z-50 mx-0 bg-white">
			<ul className="mx-0 flex items-center justify-start">
				{menuItems.map((item) => (
					<li
						key={item.key}
						className="mx-0 items-center justify-start">
						<div className="text-gray-600">
							<NavLink
								className="flex items-center text-lg"
								to={item?.route ?? '/'}>
								{item?.icon ? (
									<span className="mr-2">{item.icon}</span>
								) : null}
								{item?.label}
							</NavLink>
						</div>
					</li>
				))}
			</ul>
		</nav>
	);
};
