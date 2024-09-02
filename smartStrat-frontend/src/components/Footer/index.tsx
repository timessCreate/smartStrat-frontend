import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = '';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '智策',
          title: '智策',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/timessCreate',
          blankTarget: true,
        },
        {
          key: 'SmartStrategy',
          title: 'SmartStrategy',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
