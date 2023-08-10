import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

import { COLOR } from '../styles/color';
import { _1dp, _2dp, _4dp, _6dp, windowWidth } from '../constants/dpConstants';
import Divider from '../components/Divider';

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
        <TouchableOpacity onPress={() => navigateToScreen('Home')}>
          <View
            style={activeScreen === 'Home' ? styles.activeText : styles.text}
          >
            <Icon
              name="home"
              color={activeScreen === 'Home' ? COLOR.white : COLOR.black}
              size={20}
            />
            <Text
              style={
                activeScreen === 'Home' ? styles.contentActive : styles.content
              }
            >
              Go to Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Login')}>
          <View
            style={activeScreen === 'Login' ? styles.activeText : styles.text}
          >
            <Icon
              style={styles.icon}
              name="home"
              color={activeScreen === 'Login' ? COLOR.white : COLOR.black}
              size={20}
            />
            <Text
              style={
                activeScreen === 'Login' ? styles.contentActive : styles.content
              }
            >
              Go to Login
            </Text>
          </View>
        </TouchableOpacity>
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
