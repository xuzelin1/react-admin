import React from 'react';
import LayoutHeader from './header';
import LayoutMenu from './menu';
import LayoutContent from './content';

import './index.scss';

const Layout: React.FC = () => {
  return (
    <div className="template-layout">
        <LayoutMenu />
        <div className="main-container">
          <LayoutHeader />
          <LayoutContent />
        </div>
    </div>
  );
}

export default Layout;
