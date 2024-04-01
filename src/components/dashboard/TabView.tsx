import React, {useState} from 'react';
import {TTab} from '../../interfaces';
import {TabItem} from './TabItem';
import {TabPanel} from './TabPanel';

type TTabViewProps = {
	tabs: TTab[];
};

const TabView = ({tabs}: TTabViewProps) => {
	const [activeTab, setActiveTab] = useState<number>(0);

	return (
		<div className="mx-auto rounded-lg border bg-slate-50 py-4 drop-shadow-md">
			<div className="tabs tabs-bordered">
				{tabs?.map((tab: TTab, index: number) => {
					const isActive = index === activeTab;
					return (
						<TabItem
							key={tab?.id}
							label={tab?.label}
							isActive={isActive}
							clickHandler={() => {
								setActiveTab(index);
							}}
						/>
					);
				})}
			</div>
			<div className="mx-auto">
				{tabs?.map((tab: TTab, index: number) => {
					const isActive = index === activeTab;
					return (
						<TabPanel key={tab?.id} isActive={isActive}>
							{tab?.content}
						</TabPanel>
					);
				})}
			</div>
		</div>
	);
};

export {TabView};
