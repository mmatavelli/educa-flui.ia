import { styled } from '@gluestack-style/react';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';

export const TouchableOpacity = styled(RNTouchableOpacity, {
  defaultProps: {
    activeOpacity: 0.8,
  },
});
