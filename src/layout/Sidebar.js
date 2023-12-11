import React, { useState } from 'react';
import appRoutes from '../router/appRoutes';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import { COLOR } from '../styles/color';
import Divider from '../components/Divider';

import { _1dp, _2dp, _4dp, _6dp, windowWidth } from '../constants/dpConstants';

const Sidebar = ({ closeDrawer }) => {
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState('Home');

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    setActiveScreen(navigation.getCurrentRoute().name);
    closeDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.listMenu}>
        {appRoutes.map((screen) => {
          return (
            <TouchableOpacity onPress={() => navigateToScreen(screen.path)}>
              <View
                style={
                  activeScreen === screen.name ? styles.activeText : styles.text
                }
              >
                <Icon
                  style={styles.icon}
                  name={screen.icon}
                  color={activeScreen === screen.name ? COLOR.white : COLOR.black}
                  size={20}
                />
                <Text
                  style={
                    activeScreen === screen.name
                      ? styles.contentActive
                      : styles.content
                  }
                >
                  {screen.text}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <Divider color={COLOR.divider} />
      <TouchableOpacity style={styles.text} onPress={closeDrawer}>
        <Icon name="triangle-left" color={COLOR.danger} size={25} />
        <Text style={styles.backMenu}>Close Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth * 0.6,
    backgroundColor: COLOR.white,
  },

  listMenu: {
    marginBottom: _2dp,
  },

  text: {
    padding: _4dp,
    flexDirection: 'row',
    alignItems: 'center',
  },

  activeText: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: _4dp,
    backgroundColor: COLOR.primary,
  },

  contentActive: {
    marginLeft: _2dp,
    color: COLOR.white,
  },

  content: {
    marginLeft: _2dp,
  },

  backMenu: {
    color: COLOR.error,
  },
});

export default Sidebar;
