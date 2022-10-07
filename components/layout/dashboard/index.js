import React from "react";
import AsideMenu from "../../dashboard/asideMenu";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-row justify-between min-h-screen ">
      <div className="relative">
        <AsideMenu />
      </div>
      <main
        id="content"
        className="flex w-full min-h-screen  justify-center border-2"
      >
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
