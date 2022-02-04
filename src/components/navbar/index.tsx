import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Divider, Icon, IconButton, List, ListItem, Menu } from "@material-ui/core";
import { motion } from "framer-motion";
import { isEmpty } from "lodash";

import { User } from "../../store/user/types";
import { State } from "../../store";
import { listItemVariants, listVariants, logoVariants } from "./variants";

const Navbar = () => {

    const [openFloatSidebar, setOpenFloatSidebar] = useState(false);
    const [openAvatarMenu, setOpenAvatarMenu] = useState<null | EventTarget>(null);

    const user = useSelector<State, User>((state) => state.user);

    
    return (  
        <nav className="main-nav px-2 sm:px-0 z-50 block sticky border-b base-bg-800 top-0">
            {/* <FloatSidebar open={openFloatSidebar} setOpen={setOpenFloatSidebar}>
                <SidebarList sidebarIsOpen={true} />
            </FloatSidebar> */}

            <div className="_container">
                <div className="content flex items-center justify-between">
                    <div className="flex">
                        <IconButton
                            className="base-text-700"
                            onClick={() => {
                                document.body.classList.toggle("dark");
                            }}
                        >
                            <Icon>light_mode</Icon>
                        </IconButton>
                        <IconButton className="lg:mr-3 base-text-700">
                            <Icon>search</Icon>
                        </IconButton>
                        {!isEmpty(user) ? (
                            <h4
                                className="px-2 py-1 rounded-sm flex items-center base-text-900"
                                onClick={(e) => setOpenAvatarMenu(e.target)}
                            >
                                {user.fullname}
                                <Icon fontSize="small" className="text-gray-500 ml-1">
                                    expand_more
                                </Icon>
                            </h4>
                        ) : (
                            <div className="flex items-center base-text-900 text-sm samim-bold">
                                <NavLink to="/login">ورود</NavLink>
                                <span className="text-gray-500 px-3">|</span>
                                <NavLink to="/register">ثبت نام</NavLink>
                            </div>
                        )}
                    </div>
                    <div className="main-nav-list flex items-center">
                        <motion.ul
                            className="hidden 2xl:flex gap-10 px-8 rtl text-sm samim-bold base-text-900"
                            variants={listVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.li data-tip="user info" data-delay-show="500" variants={listItemVariants}>
                                <NavLink exact to="/">
                                    خانه
                                </NavLink>
                            </motion.li>
                            <motion.li variants={listItemVariants}>
                                <NavLink to="/about">درباره ما</NavLink>
                            </motion.li>
                            <motion.li variants={listItemVariants}>
                                <NavLink to="/contact">تماس با ما</NavLink>
                            </motion.li>
                        </motion.ul>
                        <motion.div
                            className="logo flex items-center w-20 2xl:ml-4"
                            variants={logoVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <Link to="/">
                                <img width="100%" src="./images/logo3.png" alt="logo" />
                            </Link>
                        </motion.div>
                        <IconButton onClick={() => setOpenFloatSidebar(true)} className="2xl:hidden base-text-600">
                            <Icon>menu</Icon>
                        </IconButton>
                    </div>
                </div>
                {!isEmpty(user) && (
                    <Menu
                        PaperProps={{
                            className: "bg-blue-50 dark:bg-gray-700 rounded-xl rtl",
                            style: { boxShadow: "0 1px 2px rgba(0,0,0,.3)" },
                        }}
                        open={!!openAvatarMenu}
                        onClose={() => setOpenAvatarMenu(null)}
                        anchorEl={openAvatarMenu as Element}
                    >
                        <div className="flex items-center p-3 pt-1">
                            <Avatar className="ml-3 bg-red-400">{(user.fullname as string)[0].toUpperCase()}</Avatar>
                            <div className="base-text-800">
                                <div className="base-text-900">{user.fullname}</div>
                                <div className="text-xs">{user.email}</div>
                            </div>
                        </div>
                        <Divider className="border" />
                        <List className="mx-2 pb-0">
                            <Link to="/user-info">
                                <ListItem
                                    button
                                    onClick={() => setOpenAvatarMenu(null)}
                                    className="base-text-900 p-3 pl-8 rounded-lg samim"
                                >
                                    <Icon fontSize="small" className="ml-3">
                                        grid_view
                                    </Icon>
                                    <span className="text-xs sm:text-sm">مشاهده حساب کاربری</span>
                                </ListItem>
                            </Link>
                            <Link to="/dashboard">
                                <ListItem
                                    button
                                    onClick={() => setOpenAvatarMenu(null)}
                                    className="base-text-900 p-3 pl-8 rounded-lg samim"
                                >
                                    <Icon fontSize="small" className="ml-3">
                                        grid_view
                                    </Icon>
                                    <span className="text-xs sm:text-sm">پنل ادمین</span>
                                </ListItem>
                            </Link>
                            <Link to="/logout">
                                <ListItem
                                    button
                                    onClick={() => setOpenAvatarMenu(null)}
                                    className="base-text-900 text-red-400 p-3 pl-8 rounded-lg samim"
                                >
                                    <Icon fontSize="small" className="ml-3">
                                        logout
                                    </Icon>
                                    <span className="text-xs sm:text-sm">خروج</span>
                                </ListItem>
                            </Link>
                        </List>
                    </Menu>
                )}
            </div>
        </nav>
    );
}
 
export default Navbar;