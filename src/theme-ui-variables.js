
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
      // color: USC.indigoWarmVivid[3],
      bg: 'background',
    },
    h1: {
      fontFamily: 'heading',
      fontSize: [4, 5, 6],
      color: USC.blue[7],
    },
    h2: {

    }, //
    h3: {

    }, //
    h4: {

    }, //
    h5: {

    }, //
    h6: {

    }, //
    img: {

    }, //
    pre: {

    }, //
    code: {

    }, //
    ol: {

    }, // (ordered list)
    ul: {
    }, // (unordered list)
    li: {
      listStyleType: "none",
    }, // (list item)
    blockquote: {

    }, //
    hr: {

    }, // (horizontal rule)
    em: {

    }, // (emphasis)
    table: {

    }, //
    tr: {

    }, // (table row)
    th: {

    }, // (table header)
    td: {

    }, // (table data)
    strong: {

    }, //
    delete: {

    }, //
    b: {

    }, // (bold)
    i: {

    }, // (italic)
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
    p: {

    }, // (paragraph)
    inlineCode: {

    }, // (MDX-specific key for <code> that is not a child of <pre>)
    thematicBreak: {

    }, // (MDX-specific key for <hr>)
    div: {

    } // (not rendered in MDX)
  }
}