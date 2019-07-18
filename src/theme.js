// export default {
//   fonts: {
//     body: 'system-ui, sans-serif',
//     heading: 'sans-serif',
//     monospace: 'Menlo, monospace',
//   },
//   colors: {
//     text: '#000',
//     background: '#fff',
//     primary: '#33e',
//   },
// }'
import USC from '../theme/colorsUSWDS.json'

export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#609',
  },
  fonts: {
    // heading: 'inherit',
    heading: 'Merriweather, system-ui, sans-serif',
    body: '"Source Sans Pro", system-ui, serif',
    monospace: '"Roboto Mono", system-ui, sans-serif'
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
    },
    h1: {
      fontFamily: 'heading',
      fontSize: [4, 5, 6],
      color: USC.blue[7],
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
  },
}