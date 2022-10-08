import React from "react";
import AsideMenu from "../../dashboard/asideMenu";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-row w-full  min-h-screen ">
      <div className="flex w-2/12  h-auto">
        <AsideMenu />
      </div>

      <main
        id="content"
        className="flex min-h-screen w-10/12 justify-center border-2 overflow-x-hidden"
      >
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
