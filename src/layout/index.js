import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from 'react-native-drawer';

import Header from './Header';
import Sidebar from './Sidebar';

const LayoutApp = ({ children }) => {
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.toggle();
    }
  };

  return (
    <NavigationContainer>
      <Header onOpenMenu={toggleDrawer} />
      <Drawer
        ref={drawerRef}
        type="overlay"
        content={<Sidebar closeDrawer={toggleDrawer} />}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
      >
        {children}
      </Drawer>
    </NavigationContainer>
  );
};

export default LayoutApp;
