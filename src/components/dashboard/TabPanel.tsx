type TTabPanelProps = {
	isActive: boolean;
	children: JSX.Element;
};

const TabPanel = ({isActive, children}: TTabPanelProps) => {
	return isActive ? <div className="mx-auto py-6">{children}</div> : null;
};

export {TabPanel};
