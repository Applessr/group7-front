import React, { useState } from 'react';
import { ChevronFirst, ChevronLast, UserCircle, LogOut, LayoutDashboard, CalendarRange, Notebook, Mail, ContactRound, IdCard, LibraryBig } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import useUser from '@/src/hooks/useUser';

const AdminSidebar = () => {
    const { logout, user } = useUser()
    console.log(user)
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState("profile");
    const navigate = useNavigate();

    const sidebarItems = [
        { icon: <LayoutDashboard size={24} />,text: "Dashboard",name: "dashboard"},
        { icon: <CalendarRange size={24} />, text: "Course", name: "course" },
        { icon: <IdCard  size={24} />, text: "Professor", name: "professor" },
        { icon: <IdCard size={24} />, text: "Students", name: "student" },
        { icon: <LibraryBig size={24} />, text: "Course Syllabus", name: "course-syllabus" },
    ];

    const handleClickMenu = (name) => {
        setActive(name);
        navigate(`/admin/${name}`);
    };

    const handleClickSidebar = () => {
        setOpen(!open);
    };


    const handleLogout = () => {
        logout();
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
                        <span className="font-semibold text-lg">Pierre University</span>
                    </div>
                    <button
                        className="p-1.5 rounded-lg bg-gray-50 transition duration-500 hover:bg-gray-300"
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

                <div className="bg-[#393af2] border-t p-4">
                    <div className="flex items-center gap-4">
                        {open && (
                            <div>
                                <h4 className="font-extrabold text-white">{user?.firstName} {user?.lastName}</h4>
                                <p className="text-md text-white">{user?.role}</p>
                            </div>
                        )}
                        <div onClick={handleLogout} className={`hover:bg-[#2f2fc8] w-12 h-12 rounded-full flex justify-center items-center ${open ? "ml-auto" : "hidden"}`}>
                            <LogOut className={`text-white `} />
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default AdminSidebar;