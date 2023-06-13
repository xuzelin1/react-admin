import React from "react";
import './index.scss';
import { Breadcrumb, Avatar, Dropdown, Space, message } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const breadItems = [
  {
    title: 'Home',
  },
  {
    title: <a href="">Application Center</a>,
  },
  {
    title: <a href="">Application List</a>,
  },
  {
    title: 'An Application',
  },
];

const dropdownItems: MenuProps['items'] = [
  {
    key: 'username',
    label: 'User Name',
    disabled: true,
  },{
    key: 'logout',
    label: 'Logout',
  },
];

const onDropDownClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`);
};


const LayoutHeader: React.FC = () => {
  return (
    <div className="layout-header">
      <div className="bread-crumb-container">
        <Breadcrumb items={breadItems} />
      </div>
      <div>
      <Space>
        <Avatar icon={<UserOutlined />} />
          <Dropdown menu={{ items: dropdownItems, onClick: onDropDownClick }}>
            <Space>
              <span className="header-username">User Name</span>
              <DownOutlined />
            </Space>
          </Dropdown>
        </Space>
      </div>
    </div>
  )
};

export default LayoutHeader;
