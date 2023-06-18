import {createTamagui} from '@tamagui/core'
import {shorthands} from '@tamagui/shorthands'
import {createMedia} from '@tamagui/react-native-media-driver'

import {animations} from "./animations";
import {tokens} from "./tokens/tokens";
import {fonts} from "./tokens/fonts";


export const config = createTamagui({
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts,
  themes: {
    light: {
      background: '#fff',
      color: '#000',
    },
  },
  tokens,
  media: createMedia({
    sm: { minWidth: 0 },
    md: { minWidth: 600 },
    lg: { minWidth: 960 }
  }),
})
