import { Link } from 'react-router-dom';
import React, { ReactComponentElement } from 'react';

type Props = {
  route: string;
  page: string;
  icon: JSX.Element;
};

function SidebarItem({ route, page, icon }: Props) {
  return (
    <Link to={route}>
      <li className="py-2 cursor-pointer flex items-center rounded-md hover:bg-zinc-700 pl-2">
        <div className="w-5 rounded-md">{icon}</div>
        <span className="font-medium text-md px-3">{page}</span>
      </li>
    </Link>
  );
}

export default SidebarItem;
