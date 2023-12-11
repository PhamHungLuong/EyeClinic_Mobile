import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import appRoutes from '../router/appRoutes';

import LayoutApp from '../layout';
import { ROUTES } from '../constants/route';

const Stack = createStackNavigator();

const Providers = () => {
  const publicRoutes = appRoutes.filter((route) => !route.isPrivate);
  const privateRoutes = appRoutes.filter((route) => route.isPrivate);

  return (
    <LayoutApp>
      <Stack.Navigator
        // initialRouteName={ROUTES.HOME}
        screenOptions={{ headerShown: false }}
      >
        {privateRoutes.map((screen) => {
          return (
            <Stack.Screen name={screen.name} component={screen.component} />
          );
        })}
        {publicRoutes.map((screen) => {
          return (
            <Stack.Screen name={screen.name} component={screen.component} />
          );
        })}
      </Stack.Navigator>
    </LayoutApp>
  );
};

export default Providers;
