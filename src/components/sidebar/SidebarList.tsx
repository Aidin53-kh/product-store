import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItem, Icon, Divider } from "@material-ui/core";
import Tooltip from "../tooltip";

interface SidebarListPeops {
    sidebarIsOpen: boolean;
}

const SidebarList: React.FC<SidebarListPeops> = ({ sidebarIsOpen }) => {
    return (
        <List className="main-sidebar-list base-text-800">
            <NavLink exact to="/" className="rtl mx-2 mb-2 mt-1 block rounded-md overflow-hidden">
                <Tooltip show={!sidebarIsOpen} title="صفحه اصلی" placement="left">
                    <ListItem button className="rounded-md justify-between">
                        <div className="flex items-center">
                            <Icon fontSize="small" className="main-sidebar-icon base-text-800">
                                home
                            </Icon>
                            <span className="my-1 pr-5 text-sm samim-bold truncate">صفحه اصلی</span>
                        </div>
                    </ListItem>
                </Tooltip>
            </NavLink>
            <NavLink to="/add-product" className="rtl mx-2 mb-2 mt-1 block rounded-md overflow-hidden">
                <Tooltip show={!sidebarIsOpen} title="ثبت آگهی" placement="left">
                    <ListItem button className="rounded-md justify-between">
                        <div className="flex items-center">
                            <Icon fontSize="small" className="main-sidebar-icon">
                                add_circle
                            </Icon>
                            <span className="my-1 pr-5 text-sm samim-bold truncate">ثبت آگهی</span>
                        </div>
                    </ListItem>
                </Tooltip>
            </NavLink>
            <NavLink to="/shopping-cart" className="rtl mx-2 mb-2 mt-1 block rounded-md overflow-hidden">
                <Tooltip show={!sidebarIsOpen} title="سبد خرید" placement="left">
                    <ListItem button className="rounded-md justify-between">
                        <div className="flex items-center">
                            <Icon fontSize="small" className="main-sidebar-icon">
                                shopping_cart
                            </Icon>
                            <span className="my-1 pr-5 text-sm samim-bold truncate">سبد خرید</span>
                        </div>
                    </ListItem>
                </Tooltip>
            </NavLink>

            <NavLink to="/favorites" className="rtl mx-2 mb-2 mt-1 block rounded-md overflow-hidden">
                <Tooltip show={!sidebarIsOpen} title="آگهی های پسندیده" placement="left">
                    <ListItem button className="rounded-md justify-between">
                        <div className="flex items-center">
                            <Icon fontSize="small" className="main-sidebar-icon">
                                bookmark
                            </Icon>
                            <span className="my-1 pr-5 text-sm samim-bold truncate">آگهی های پسندیده</span>
                        </div>
                    </ListItem>
                </Tooltip>
            </NavLink>

            <NavLink to="/my-products" className="rtl mx-2 mb-3 mt-1 block rounded-md overflow-hidden">
                <Tooltip show={!sidebarIsOpen} title="آگهی های من" placement="left">
                    <ListItem button className="rounded-md justify-between">
                        <div className="flex items-center">
                            <Icon fontSize="small" className="main-sidebar-icon">
                                person
                            </Icon>
                            <span className="my-1 pr-5 text-sm samim-bold truncate">آگهی های من</span>
                        </div>
                    </ListItem>
                </Tooltip>
            </NavLink>
            <Divider className="bg-gray-200 dark:bg-gray-700" />
            <NavLink to="/settings" className="rtl mx-2 mb-2 mt-3 block rounded-md overflow-hidden">
                <Tooltip show={!sidebarIsOpen} title="تنظیمات" placement="left">
                    <ListItem button className="rounded-md justify-between">
                        <div className="flex items-center">
                            <Icon fontSize="small" className="main-sidebar-icon">
                                settings
                            </Icon>
                            <span className="my-1 pr-5 text-sm samim-bold truncate">تنظیمات</span>
                        </div>
                    </ListItem>
                </Tooltip>
            </NavLink>
            <NavLink to="/contact-us" className="rtl mx-2 mb-2 mt-2 block rounded-md overflow-hidden">
                <Tooltip show={!sidebarIsOpen} title="تماس با پشتیبانی" placement="left">
                    <ListItem button className="rounded-md justify-between">
                        <div className="flex items-center">
                            <Icon fontSize="small" className="main-sidebar-icon">
                                call
                            </Icon>
                            <span className="my-1 pr-5 text-sm samim-bold truncate">تماس با پشتیبانی</span>
                        </div>
                    </ListItem>
                </Tooltip>
            </NavLink>
        </List>
    );
};

export default SidebarList;
