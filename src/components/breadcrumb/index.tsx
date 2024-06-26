import {useBreadcrumb} from '@refinedev/core';
import {Link} from 'react-router-dom';

export const Breadcrumb = () => {
	const {breadcrumbs} = useBreadcrumb();

	return (
		<div className="breadcrumbs text-sm">
			<ul className="my-2">
				{breadcrumbs.map((breadcrumb) => {
					return (
						<li key={`breadcrumb-${breadcrumb.label}`}>
							{breadcrumb?.icon ? (
								<span className="mx-2">{breadcrumb.icon}</span>
							) : null}
							{breadcrumb.href ? (
								<Link to={breadcrumb.href}>
									{breadcrumb.label}
								</Link>
							) : (
								<span>{breadcrumb.label}</span>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
