import React from 'react';

interface FloatSidebarProsp {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FloatSidebar: React.FC<FloatSidebarProsp> = ({ open, setOpen, children }) => {
	return (
		<>
			<div className={`float-sidebar base-bg-800 2xl:hidden ${open ? 'open' : ''}`}>{children}</div>
			<div onClick={() => setOpen(false)} className={`float-sidebar-blur 2xl:hidden ${open ? 'open' : ''}`}></div>
		</>
	);
};

export default FloatSidebar;
