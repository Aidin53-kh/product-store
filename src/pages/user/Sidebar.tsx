import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const Sidebar = ({ className }) => (
    <section className={`2xl:col-start-10 2xl:col-span-3 ${className}`}>
        <Box className="base-color-900 base-text-700 border rtl dark:border-gray-700 rounded-lg divide-y dark:divide-gray-700">
            <div className="p-3 text-sm">
                <Link to="/user-info">حساب کاربری</Link>
            </div>
            <div className="p-3 text-sm">ویرایش پروفایل</div>
            <div className="p-3 text-sm">ویرایش عکس پروفایل</div>
            <div className="p-3 text-sm">
                <Link to="/user-info/change-password">تغییر رمز عبور</Link>
            </div>
            <div className="p-3 text-red-500 text-sm dark:text-red-400">
                <Link to="/logout">خروج از حساب کاربری</Link>
            </div>
        </Box>
    </section>
);

export default Sidebar;