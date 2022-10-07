import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex flex-row justify-between min-h-screen ">
      Ce Vreti sa vedeti Astazi <br />
      selectati din meniul din stanga
    </div>
  );
};
DashboardPage.Auth = true;
DashboardPage.Admin = true;
export default DashboardPage;
