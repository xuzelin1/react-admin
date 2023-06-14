import React, { useState } from 'react';
import './index.scss';
import { MailOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Button } from 'antd';
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

type ItemConfig = {
  label: React.ReactNode;
  key?: React.Key | null;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
}

function getItem({
  label,
  key,
  icon,
  children,
  type,
}: ItemConfig): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem({
    label: 'Navigation One',
    key: 'sub1', 
    icon: <MailOutlined />,
    children: [
      getItem({ label: 'Option 1', key: '1' }),
      getItem({ label: 'Option 2', key: '2' }),
      getItem({ label: 'Option 3', key: '3' }),
      getItem({ label: 'Option 4', key: '4' }),
    ]
  }),

  // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  // ]),

  // getItem('Navigation Three', 'sub4', <SettingOutlined />, [
  //   getItem('Option 9', '9'),
  //   getItem('Option 10', '10'),
  //   getItem('Option 11', '11'),
  //   getItem('Option 12', '12'),
  // ]),
];

const App: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');


  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div className="layout-menu">
      <Menu
        theme={theme}
        onClick={onClick}
        style={{ width: collapsed ? 56 : 256, height: '100%' }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        inlineCollapsed={collapsed}
      />
      <div className="toggle-collapse">
        <div onClick={toggleCollapsed} style={{ marginRight: 20 }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </div>
    </div>
  );
};

export default App;