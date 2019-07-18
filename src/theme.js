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
// }

export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#609',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
    },
    h1: {
      fontSize: [4, 5, 6],
      color: 'primary',
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