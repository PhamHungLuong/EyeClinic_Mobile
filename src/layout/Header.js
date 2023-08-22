import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styled from 'styled-components/native';

import { _4dp, _6dp } from '../constants/dpConstants';
import { COLOR } from '../styles/color';
import { View } from 'react-native';

const Header = ({ onOpenMenu }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onOpenMenu}>
        <Icon name="menu" color={COLOR.black} size={30} />
      </TouchableOpacity>
      <Text style={styles.avartarText}>L</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: _4dp,
    marginTop: _6dp,
  },

  avartarText: {
    padding: _4dp,
    paddingLeft: _6dp,
    paddingRight: _6dp,
    borderRadius: 50,
    color: COLOR.white,
    backgroundColor: COLOR.primary,
  },
});
