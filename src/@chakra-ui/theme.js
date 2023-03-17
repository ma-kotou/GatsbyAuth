import { extendTheme } from '@chakra-ui/react'

// componentのスタイルをカスタムする
const Container = {
  baseStyle: {
    maxW: { base: 'calc(100vw - 40px)', lg: '60vw' },
  },
}

const theme = {
  components: {
    Container,
    Text: {
      baseStyle: {
        lineHeight: 2,
        fontWeight: 700,
        letterSpacing: '2px',
      },
    },
    GridItem: {
      baseStyle: {
        letterSpacing: '4px',
      },
    },
  },
  colors: {
    primary: '#F01',
    dark: '#000',
  },
  fonts: {
    heading: 'futura-pt, sans-serif',
    body: 'source-han-sans-japanese, "Noto Sans JP"',
  },
  textStyles: {
    en: {
      fontFamily: 'futura-pt',
    },
    italic: {
      fontFamily: 'Dancing Script',
    },
  },
}

export default extendTheme(theme)
