import React, { FunctionComponent } from 'react';

import SidebarTop from './SidebarTop/SidebarTop';
import SidebarButton from './SideBarButton/SidebarButton';
import SidebarTitle from './SidebarTitle/SidebarTitle';
import DividerLine from '@/components/DividerLine/DividerLine';

import styles from './Sidebar.module.scss';

interface Props {
  pageTitle: string;
}

const Sidebar: FunctionComponent<Props> = ({ pageTitle }) => {
  return (
    <div className={styles.Sidebar}>

      <SidebarTop pageTitle={pageTitle} />

      <DividerLine />
      <SidebarTitle>MENU</SidebarTitle>

      <SidebarButton to="/" active={pageTitle === 'Dashboard'}>
        Dashboard
      </SidebarButton>
      <SidebarButton to="/buildings" active={pageTitle === 'Buildings'}>
        Buildings
      </SidebarButton>
      <SidebarButton to="/" active={false}>
        Posts
      </SidebarButton>
      <SidebarButton to="/" active={false}>
        Conversations
      </SidebarButton>
      <SidebarButton to="/" active={false}>
        Amenities
      </SidebarButton>
      <SidebarButton to="/" active={false}>
        Tenants
      </SidebarButton>

      <DividerLine />
      <SidebarTitle>SUPPORT</SidebarTitle>
      
      <SidebarButton to="/" active={false}>
        Need Help?
      </SidebarButton>
      <SidebarButton to="/contact-us" active={pageTitle === 'ContactUs'}>
        Contact Us
      </SidebarButton>
      <SidebarButton to="/" active={false}>
        Knowledge Base
      </SidebarButton>
    </div>
  );
};

export default Sidebar;
