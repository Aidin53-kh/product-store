import { Avatar, Box, Icon, Tab, Tabs } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";

import TabPanel from "../../../components/tabpanel";
import { State } from "../../../store";
import { User } from "../../../store/user/types";
import Sidebar from "../Sidebar";

const UserInfo = () => {
    const user = useSelector<State, User>((state) => state.user);
    const [tabPage, setTabPage] = useState(0);

    const handleChangePage = (e: React.SyntheticEvent, newPage: number) => {
        setTabPage(newPage);
    };

    return (
        <div>
            <div className="flex items-center mb-8 lg:mt-5 px-3">
                <Avatar className="p-10 text-4xl bg-blue-400">{user.fullname[0].toUpperCase()}</Avatar>
                <div className="mr-4">
                    <div className="base-text-900 samim-bold mb-1">نام و نام خانوادگی : {user.fullname}</div>
                    <div className="base-text-800">
                        <span className="samim-bold base-text-900">ایمیل : </span>
                        {user.email}
                    </div>
                </div>
            </div>
            <Sidebar className="2xl:hidden mb-4 px-3" />
            <Tabs className="base-text-900" indicatorColor="primary" value={tabPage} onChange={handleChangePage}>
                <Tab
                    TouchRippleProps={{
                        className: "hidden",
                    }}
                    className="samim-bold px-5"
                    label="ایمیل های من"
                />
                <Tab
                    TouchRippleProps={{
                        className: "hidden",
                    }}
                    className="samim-bold px-5"
                    label="تیکت ها"
                />
                <Tab
                    TouchRippleProps={{
                        className: "hidden",
                    }}
                    className="samim-bold px-5"
                    label="سابقه ها"
                />
            </Tabs>
            <Box className="border-t dark:border-gray-700 p-3">
                <TabPanel value={tabPage} index={0}>
                    <div className="text-center mt-12">
                        <Icon className="text-9xl text-gray-200 dark:text-gray-700">email</Icon>
                        <h1 className="text-2xl samim-bold base-text-800">ایمیلی ندارید</h1>
                    </div>
                </TabPanel>
                <TabPanel value={tabPage} index={1}>
                    <div className="text-center mt-12">
                        <Icon className="text-9xl text-gray-200 dark:text-gray-700">error</Icon>
                        <h1 className="text-2xl samim-bold base-text-800">تیکتی ندارید</h1>
                    </div>
                </TabPanel>
                <TabPanel value={tabPage} index={2}>
                    <div className="text-center mt-12">
                        <Icon className="text-9xl text-gray-200 dark:text-gray-700">history</Icon>
                        <h1 className="text-2xl samim-bold base-text-800">سابقه ای ندارید</h1>
                    </div>
                </TabPanel>
            </Box>
        </div>
    );
};

export default UserInfo;
