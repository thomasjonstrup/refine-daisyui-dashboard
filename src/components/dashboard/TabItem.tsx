import {twMerge} from 'tailwind-merge';

type TTabItemProps = {
	label: string;
	isActive: boolean;
	clickHandler: () => void;
};

const TabItem = ({label, isActive, clickHandler}: TTabItemProps) => {
	return (
		<a
			href="#"
			className={twMerge(
				'text-l tab font-bold',
				isActive ? 'tab-active' : ''
			)}
			onClick={(event) => {
				event.preventDefault();
				clickHandler();
			}}>
			{label}
		</a>
	);
};

export {TabItem};
