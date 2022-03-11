import React from 'react';
import {
  ChartBarIcon,
  CalendarIcon,
  ClockIcon,
  LoginIcon,
  CogIcon,
  LinkIcon,
  PencilAltIcon,
} from '@heroicons/react/outline';

import moment from 'moment';
import SidebarItem from './SidebarItem';

function Sidebar(): JSX.Element {
  return (
    <nav className="h-screen z-50 bg-blue-700 text-slate-50 border-r border-slate-50 min-w-[12rem]">
      <header className="bg-blue-800 mb-2 py-2 px-1 flex flex-row items-center bg-">
        <img
          src="https://picsum.photos/200"
          alt=""
          className="w-10 h-10 rounded-full mx-2 object-cover"
        />

        <div>
          <h6 className="text-md font-semibold leading-none">John Doe</h6>
          <span className="text-sm">{moment().format('Do MMMM YYYY')}</span>
        </div>
      </header>

      <div className="h-[calc(100%-4rem)] flex flex-col justify-between">
        <div className="mt-5">
          <ul>
            <SidebarItem route="/" page="Home" icon={<ChartBarIcon />} />
            <SidebarItem route="/timer" page="Timer" icon={<ClockIcon />} />
            <SidebarItem route="/notes" page="Notes" icon={<PencilAltIcon />} />
            <SidebarItem route="/links" page="Links" icon={<LinkIcon />} />
            <SidebarItem
              route="/calender"
              page="Calendar"
              icon={<CalendarIcon />}
            />
          </ul>
        </div>

        <div className="border-t pt-2 pb-2">
          <SidebarItem route="/logout" page="Logout" icon={<LoginIcon />} />

          <SidebarItem route="/settings" page="Settings" icon={<CogIcon />} />
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
