import React from 'react';
import { COLOR } from '../../styles/color';
import { View } from 'react-native';

const Divider = ({ color = COLOR.divider, height = 2, ...rest }) => {
  return <View style={{ backgroundColor: color, height: height, ...rest }} />;
};

export default Divider;
