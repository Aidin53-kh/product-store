import { useState } from "react";
import { Icon, IconButton } from "@material-ui/core";
import SidebarList from "./SidebarList";

const Sidebar = () => {
    const [open, setOpen] = useState(true);

    return (
        <aside className={`main-sidebar ${open ? "" : "close"} base-bg-800 sticky top-0 hidden 2xl:inline-block`}>
            <div className="content">
                <div className="main-nav flex items-center rtl justify-between border-b dark:border-gray-700 pl-5 pr-3">
                    <IconButton onClick={() => setOpen(o => !o)} className="base-text-700 relative" style={{ left: "2px "}}>
                        <Icon>
                            menu
                        </Icon>
                    </IconButton>
                    <input className="outline-none border-none bg-transparent px-6" placeholder="جستجو ..." />
                </div>
                <SidebarList sidebarIsOpen={open} />
            </div>
        </aside>
    );
};

export default Sidebar;