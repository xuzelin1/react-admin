import React from 'react';
import Layout from '@/views/layout';
import LayoutHeader from './views/layout/header';
import LayoutMenu from './views/layout/menu';
import LayoutContent from './views/layout/content';


const App: React.FC = () => {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
