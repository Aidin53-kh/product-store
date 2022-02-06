import { Route, Switch } from "react-router-dom";

import ChangePassword from "./pages/ChangePassword";
import UserInfo from "./pages/UserProfile";
import Sidebar from "./Sidebar";

const UserDashboard = () => {
    return (
        <div className="_container grid 2xl:grid-cols-12 py-6 gap-5">
            <section className="2xl:col-start-1 2xl:col-span-9 rtl">
                <Switch>
                    <Route path="/user-info/change-password">
                        <ChangePassword />
                    </Route>
                    <Route exact path="/user-info">
                        <UserInfo />
                    </Route>
                </Switch>
            </section>
            <Sidebar className="hidden 2xl:block mt-3" />
        </div>
    );
};

export default UserDashboard
