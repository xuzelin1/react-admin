import React from 'react';
import LayoutHeader from './views/layout/header';
import LayoutMenu from './views/layout/menu';
import LayoutContent from './views/layout/content';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="menu-container">
        <LayoutMenu />
      </div>
      <div className="main-container">
        <LayoutHeader />
        <LayoutContent />
      </div>
    </div>
  );
}

export default App;
