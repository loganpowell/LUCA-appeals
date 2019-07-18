
import USC from '../theme/colorsUSWDS.json'

export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#609'
  },
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ],
  fonts: {
    // heading: 'inherit',
    heading: 'Merriweather, system-ui, sans-serif',
    body: '"Source Sans Pro", system-ui, serif',
    monospace: '"Roboto Mono", system-ui, sans-serif'
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6"
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 5
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 4
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 3
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 2
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 1
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 0
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
    b: { // (bold)
    }, 
    i: {  // (italic)
    },
    ol: { // (ordered list)
    }, 
    ul: { // (unordered list)
    }, 
    li: { // (list item)
      listStyleType: "none",
    }, 
    blockquote: {
    }, 
    hr: { // (horizontal rule)
    }, 
    em: { // (emphasis)
    }, 
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    strong: {
    }, 
    delete: {
    },
    inlineCode: { // (MDX-specific key for <code> that is not a child of <pre>)

    }, 
    thematicBreak: { // (MDX-specific key for <hr>)

    }, 
  }
}