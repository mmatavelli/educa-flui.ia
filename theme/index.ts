import { createComponents, createConfig } from '@gluestack-style/react';
import { config as defaultConfig } from '@gluestack-ui/config';
import { DefaultTheme, Theme } from '@react-navigation/native';

import * as componentsTheme from './components';

export const gluestackUIConfig = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,

      primary50: '#E6F7F7',
      primary100: '#CCEEEE',
      primary200: '#99DDDD',
      primary300: '#66CCCC',
      primary400: '#33BBBB',

      primary500: '#008182',
      primary600: '#006666',
      primary700: '#004C4D',
      primary800: '#003333',
      primary900: '#001919',

      secondary50: '#F4F7F9',
      secondary100: '#EAF0F4',
      secondary200: '#D5E0E9',
      secondary300: '#BFCFDE',
      secondary400: '#AABFD3',
      secondary500: '#3863ad',
      secondary600: '#7B9CC1',
      secondary700: '#5F84B5',
      secondary800: '#4A6A9A',
      secondary900: '#2E4C6E',
    },
  },
});

export const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    background: gluestackUIConfig.tokens.colors.white,
    card: gluestackUIConfig.tokens.colors.white,
    text: gluestackUIConfig.tokens.colors.black,
    border: gluestackUIConfig.tokens.colors.textLight200,
    primary: gluestackUIConfig.tokens.colors.primary500,
    notification: gluestackUIConfig.tokens.colors.primary500,
  },
};

type Config = typeof gluestackUIConfig;

type Components = typeof componentsConfig;

export const componentsConfig = createComponents(componentsTheme);

export type { UIComponents, UIConfig } from '@gluestack-ui/themed';

export interface IConfig {}
export interface IComponents {}

declare module '@gluestack-ui/themed' {
  interface UIConfig extends Omit<Config, keyof IConfig>, IConfig {}
  interface UIComponents
    extends Omit<Components, keyof IComponents>,
      IComponents {}
}

export const config = {
  ...gluestackUIConfig,
  components: componentsConfig,
};
