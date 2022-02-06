import React from 'react';
import Navbar from '../navbar';
import Sidebar from '../sidebar';

const MainLayout: React.FC = ({ children }) => {
	return (
		<div className="flex w-full dark:bg-gray-900">
			<div className="w-full">
				<Navbar />
				<div>{children}</div>
			</div>
			<Sidebar />
		</div>
	);
};

export default MainLayout;
