import React from "react";
import './index.scss'
import { Outlet } from "react-router-dom";


const LayoutContent: React.FC = () => {
  return (
    <div className="layout-content">
      <Outlet />
    </div>
  );
};

export default LayoutContent;
