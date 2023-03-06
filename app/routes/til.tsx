import { Outlet } from '@remix-run/react';

function TILLayout() {
  return (
    <div className="max-w-[80ch] mx-auto p-4">
      <Outlet />
    </div>
  );
}

export default TILLayout;
