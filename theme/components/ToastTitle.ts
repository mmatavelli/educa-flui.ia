import { createStyle } from '@gluestack-style/react';

export const ToastTitle = createStyle({
  fontWeight: '$medium',
  props: {
    size: 'md',
  },
  color: '$white',
  _dark: {
    color: '$textDark50',
  },
});
