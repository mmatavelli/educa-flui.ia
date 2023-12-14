import { createStyle } from '@gluestack-style/react';
import { initialWindowMetrics } from 'react-native-safe-area-context';

export const Toast = createStyle({
  px: '$4',
  py: '$3',
  borderRadius: '$md',
  flexDirection: 'row',
  _android: {
    marginTop: initialWindowMetrics?.insets.top,
  },
  variants: {
    action: {
      error: {
        bg: '$error400',
        borderColor: '$error300',
        _icon: {
          color: '$error500',
        },
        _dark: {
          bg: '$backgroundDarkError',
          borderColor: '$error700',
          _icon: {
            color: '$error500',
          },
        },
      },
      warning: {
        bg: '$warning400',
        borderColor: '$warning300',
        _icon: {
          color: '$white',
        },
        _dark: {
          bg: '$backgroundDarkWarning',
          borderColor: '$warning700',
          _icon: {
            color: '$warning500',
          },
        },
      },
      success: {
        bg: '$success400',
        borderColor: '$success300',
        _icon: {
          color: '$success500',
        },
        _dark: {
          bg: '$backgroundDarkSuccess',
          borderColor: '$success700',
          _icon: {
            color: '$white',
          },
        },
      },
      info: {
        bg: '$info400',
        borderColor: '$info300',
        _icon: {
          color: '$white',
        },
        _dark: {
          bg: '$backgroundDarkInfo',
          borderColor: '$info700',
          _icon: {
            color: '$info500',
          },
        },
      },
      attention: {
        bg: '$secondary400',
        borderColor: '$secondary300',
        _icon: {
          color: '$white',
        },
        _dark: {
          bg: '$backgroundDarkMuted',
          borderColor: '$secondary700',
          _icon: {
            color: '$secondary400',
          },
        },
      },
    },

    variant: {
      solid: {},
      outline: {
        borderWidth: '$1',
        bg: '$white',
        _dark: {
          bg: '$black',
        },
      },
      accent: {
        borderLeftWidth: '$4',
      },
    },
  },
  m: '$3',

  _web: {
    props: {
      pointerEvents: 'auto',
    },
  },
  defaultProps: {
    hardShadow: '5',
    variant: 'solid',
    action: 'attention',
  },
});
