import { NavLink } from '@remix-run/react';
import ProgressIndicator from '../ProgressIndicator';

const activeStyle = {
  fontWeight: 'bold',
};

function Header() {
  return (
    <div className=" mb-8 sticky top-0 bg-slate-900">
      <div className="p-2">
        <div className="container mx-auto flex gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-rose-500' : 'text-rose-300'
            }
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Home
          </NavLink>
          <span>|</span>
          <NavLink
            to="til"
            // className="group/navlink"
            className={({ isActive }) =>
              `group/navlink ${
                isActive ? 'active text-rose-500' : 'text-rose-300'
              }`
            }
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            <span className="flex gap-1 group">
              <span className="transition-[width] duration-300 overflow-hidden group-hover:w-[5ch] group-[.active]/navlink:w-[5ch] w-[1ch]">
                Today
              </span>
              <span>I</span>
              <span className="transition-[width] duration-300 overflow-hidden w-[1ch] group-hover:w-[7ch] group-[.active]/navlink:w-[7ch]">
                Learned
              </span>
            </span>
          </NavLink>
        </div>
      </div>
      <ProgressIndicator />
    </div>
  );
}

export default Header;
