import React from 'react';
import { List, ListItem, Icon, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface SideProductDetailsProps {
    className?: string
}

const SideProductDetails: React.FC<SideProductDetailsProps> = ({ className }) => {
	return (
		<div className={`side-product-details rtl mx-3 xl:mx-0 2xl:mx-3 3xl:mx-0 ${className || ''}`}>
			<div className="md:flex gap-4 xl:inline-block 2xl:flex 3xl:inline-block mb-4">
				<div className="call-data shadow-md base-bg-800 rounded p-4 w-full md:mb-0 xl:mb-4 2xl:mb-0 3xl:mb-4">
					<h2 className="text-lg base-text-800 samim-bold">اطلاعات تماس</h2>
					<p className="text-sm base-text-800 my-4">تا قبل از دریافت کالا از پرداخت وجه خوداری کنید ما هیچ مسعولیتی در این باره نداریم.</p>
					<Button fullWidth className="samim-bold text-gray-50 bg-blue-500">
						09118293713 تماس
						<Icon fontSize="small" className="pr-8">
							bookmark_outline
						</Icon>
					</Button>
				</div>

				<div className="shadow-md base-bg-800 rounded p-4 w-full">
					<h2 className="text-lg base-text-800 samim-bold">افزودن به سبد خرید</h2>
					<p className="text-sm base-text-800 my-4">
						محصول را به سبد خرید خئد اضافه کنید تا هر زمان که مایل بودید ان را خریداری کنید
					</p>
					<Button fullWidth className="samim-bold text-gray-50 bg-green-500">
						افزودن به سبد خرید
						<Icon fontSize="small" className="pr-8">
							bookmark_outline
						</Icon>
					</Button>
				</div>
			</div>

			<div className="md:flex gap-4">
			<List className="shadow-md block md:flex xl:block 2xl:flex 3xl:block base-bg-800 rounded overflow-hidden mb-4 w-full">
				<Link to="/" className="rtl w-full">
					<ListItem button className="base-text-800 justify-between">
						<div className="flex items-center">
							<Icon fontSize="small" className="text-red-500">
								error
							</Icon>
							<span className="my-1 pr-4 text-sm samim-bold">گذارش اگهی</span>
						</div>
						<Icon className="text-gray-500">chevron_left</Icon>
					</ListItem>
				</Link>
				<Divider className="bg-gray-200 dark:bg-gray-700 md:hidden xl:block 2xl:hidden 3xl:block" />
				<Link to="/login" className="rtl w-full md:hidden xl:block 2xl:hidden 3xl:block">
					<ListItem button className="base-text-800 justify-between">
						<div className="flex items-center">
							<Icon fontSize="small" className="text-blue-500">
								help_outline
							</Icon>
							<span className="my-1 pr-4 text-sm samim-bold">قوانین</span>
						</div>
						<Icon className="text-gray-500">chevron_left</Icon>
					</ListItem>
				</Link>
			</List>

			<List className="shadow-md hidden md:flex base-bg-800 rounded overflow-hidden mb-4 w-full xl:hidden 2xl:flex 3xl:hidden">
			<Link to="/login" className="rtl w-full">
					<ListItem button className="base-text-800 justify-between">
						<div className="flex items-center">
							<Icon fontSize="small" className="text-blue-500">
								help_outline
							</Icon>
							<span className="my-1 pr-4 text-sm samim-bold">قوانین</span>
						</div>
						<Icon className="text-gray-500">chevron_left</Icon>
					</ListItem>
				</Link>
			</List>
			</div>
		</div>
	);
};

export default SideProductDetails;
