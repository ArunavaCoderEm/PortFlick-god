import React from 'react';

import { Link } from 'react-router-dom';
import { FaPen, FaClipboardList, FaChartPie,FaUser, FaQuestionCircle ,FaPaperPlane, FaFileAlt, FaCalendarAlt, FaHistory} from 'react-icons/fa';

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {


  return (
    <>
      <div
        className={`lg:w-[15%] lg:h-screen lg:fixed  lg:left-0 lg:z-10 lg:flex lg:flex-col lg:gap-4 lg: 
          ${isSidebarOpen ? 'fixed left-0 w-90 h-[calc(100vh)] lg:hidden z-20' : 'hidden lg:flex'} 
          bg-gradient-to-b from-gray-950 to-purple-500 text-gray-100 border-t-[0.5px] border-gray-900`}>
        <div className="bg-transparent text-white-900 h-[calc(100%-20%)] rounded p-4">
          <Link
            to="/dashboard"
            className="p-4  rounded font-semibold flex items-center gap-3 transition hover:bg-slate-800 focus:bg-slate-800 text-hoverButtonColor">
            <FaChartPie className="text-xl" />
            <span>Dashboard</span> 
          </Link>
          <Link
            to="/dashboard/template"
            className="p-4  rounded font-semibold flex items-center gap-3 transition hover:bg-slate-800 focus:bg-slate-800 text-hoverButtonColor">
            <FaPen className="text-xl" /> 
            <span>Compose Email</span> 
          </Link>
          <Link
            to="/dashboard/account"
            className="p-4 rounded font-semibold flex items-center gap-3 transition hover:bg-slate-800 focus:bg-slate-800 text-hoverButtonColor">
            <FaUser className="text-xl" /> 
            <span>Account Settings</span> 
          </Link>
          <Link
            to="/dashboard"
            className="p-4 rounded font-semibold flex items-center gap-3 transition hover:bg-slate-800 focus:bg-slate-800 text-hoverButtonColor">
            <FaFileAlt className="text-xl" /> 
            <span>My Drafts</span> 
          </Link>
          <Link
            to="/dashboard"
            className="p-4 rounded font-semibold flex items-center gap-3 transition hover:bg-slate-800 focus:bg-slate-800 text-hoverButtonColor">
            <FaHistory className="text-xl" /> 
            <span>My Activity</span> 
          </Link>

          <hr className="border-t border-gray-500 my-4" />
          <Link
            to="/dashboard"
            className="p-4  rounded font-semibold flex items-center gap-3 transition hover:bg-slate-800 focus:bg-slate-800 text-hoverButtonColor">
            <FaClipboardList className="text-xl" /> 
            <span>Change Log</span> 
          </Link>
          <Link
            to="/dashboard"
            className="p-4  rounded font-semibold flex items-center gap-3 transition hover:bg-slate-800 focus:bg-slate-800 text-hoverButtonColor">
            <FaQuestionCircle className="text-xl" /> 
            <span>Help</span> 
          </Link>
        </div>
      </div>
    </>
  );
}
