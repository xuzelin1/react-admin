import React from "react";
import './index.scss'
import {
  RouterProvider,
} from "react-router-dom";
import router from '../../../router';

const LayoutContent: React.FC = () => {
  return (
    <div className="layout-content">
      {/* <div id="painter"></div> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default LayoutContent;
