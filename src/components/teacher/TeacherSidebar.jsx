import React, { useState } from 'react';
import { ChevronFirst, ChevronLast, UserCircle,LogOut, LayoutDashboard, CalendarRange, Notebook, Mail, ContactRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SidebarItem from './SidebarItem';

const TeacherSidebar = () => {
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState("profile");
    const navigate = useNavigate();

    const sidebarItems = [
        { icon: <UserCircle size={24} />, text: "Profile", name: "profile" },
        { icon: <LayoutDashboard size={24} />,text: "Dashboard",name: "dashboard"},
        { icon: <CalendarRange size={24} />, text: "Schedule", name: "schedule" },
        { icon: <Notebook size={24} />, text: "Course", name: "course" },
        { icon: <Mail size={24} />, text: "Requested Course", name: "requested-course" },
        { icon: <ContactRound size={24} />, text: "Advisors", name: "advisors" },

    ];

    const handleClickMenu = (name) => {
        setActive(name);
        navigate(`/teacher/${name}`);
    };

    const handleClickSidebar = () => {
        setOpen(!open);
    };

    return (
        <aside className={`h-screen transition-width duration-300 ${open ? "w-80" : "w-20"}`}>
            <nav className="h-full flex flex-col bg-white border-r">
                <div className="p-4 flex items-center justify-between">
                    <div className={`flex items-center gap-4 ${!open && "hidden"}`}>
                        <img
                            src="https://i.postimg.cc/mZnSzDB9/Group-7-Project.png"
                            alt="Pierre University"
                            className="h-8"
                        />
                        <span className="font-semibold text-lg text-amber-700">Pierre University</span>
                    </div>
                    <button
                        className="p-1.5 rounded-lg text-amber-700 bg-gray-50 transition duration-500 hover:bg-gray-300"
                        onClick={handleClickSidebar}
                    >
                        {open ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <ul className="flex-1 px-3">
                    {sidebarItems.map((item) => (
                        <SidebarItem
                            key={item.name}
                            icon={() => item.icon}
                            text={open ? item.text : ""}
                            active={item.name === active}
                            onClick={() => handleClickMenu(item.name)}
                        />
                    ))}
                </ul>

                <div className="bg-[#ab842e] border-t p-4">
                    <div className="flex items-center gap-4">
                        {open && (
                            <div>
                                <h4 className="font-extrabold text-white">Bobby</h4>
                                <p className="text-md text-white">Professor</p>
                            </div>
                        )}
                        <LogOut className={`text-white ${open ? 'ml-auto' : 'hidden'}`} />
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default TeacherSidebar;