import { extendTheme } from 'native-base';

import { Button } from './components/button.theme';
import { Input } from './components/input.theme';
import { Text } from './components/text.theme';
import { colors } from './foundations/colors.theme';
import { fontConfig } from './foundations/font-config';
import { fontSizes } from './foundations/font-sizes.theme';
import { fonts } from './foundations/fonts';

export const theme = extendTheme({
  colors,
  fontConfig,
  fonts,
  fontSizes,
  components: {
    Text,
    Button,
    Input,
  },
});

type CustomThemeType = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
