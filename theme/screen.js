/*eslint-disable object-shorthand*/

const brand = {
  // black and its tints:
  black: '#111', // black
  darkerGray: '#373534',
  darkGray: '#5f5c5b',
  gray: '#a19e9d',
  lightGray: '#e8e8e9',
  white: '#f6f6f6', // lightest gray
  // red and its tints:
  red: '#c43a31', // brand red
  darkestRed: '#cd5244',
  darkerRed: '#d56557',
  darkRed: '#dc7a6b',
  lightred: '#e58c7d',
  lighterRed: '#eb9f92',
  lightestRed: '#efb3a7',
  paleRed: '#f5c5bc',
  palerRed: '#f8d9d2',
  palestRed: '#f6ebe7', // palest red
};

const colors = {
  primary: brand.black,
  secondary: brand.darkGray,
  tertiary: brand.lightGray,
  quartenary: brand.white,
};

const fonts = {
  heading:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  body:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  monospace:
    "'Inconsolata', Consolas, 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', Monaco, Courier, monospace",
};

export default {
  colors: colors,
  fonts: fonts,
  global: {
    body: {
      background: colors.primary,
      fontFamily: fonts.body,
      fontWeight: 'normal',
      fontSize: '2em',
      color: brand.white,
      overflow: 'hidden',
    },
    'html, body': {
      height: '100%',
    },
    '*': {
      boxSizing: 'border-box',
    },
  },
  fullscreen: {
    fill: colors.tertiary,
  },
  autoplay: {
    pause: {
      position: 'absolute',
      top: 20,
      right: '50%',
      left: '50%',
      zIndex: 9999,
      background: 'none',
      border: 'none',
      outline: 0,
    },
    pauseIcon: {
      fill: colors.tertiary,
    },
    play: {
      position: 'absolute',
      top: 20,
      right: '50%',
      left: '50%',
      zIndex: 9999,
      background: 'none',
      border: 'none',
      outline: 0,
    },
    playIcon: {
      fill: colors.tertiary,
    },
  },
  controls: {
    prev: {
      position: 'absolute',
      top: '50%',
      left: 20,
      transform: 'translateY(-50%)',
      zIndex: 9999,
      background: 'none',
      border: 'none',
      outline: 0,
    },
    prevIcon: {
      fill: colors.quartenary,
    },
    next: {
      position: 'absolute',
      top: '50%',
      right: 20,
      transform: 'translateY(-50%)',
      zIndex: 9999,
      background: 'none',
      border: 'none',
      outline: 0,
    },
    nextIcon: {
      fill: colors.quartenary,
    },
  },
  progress: {
    pacman: {
      container: {
        position: 'absolute',
        bottom: '5px',
        left: '50%',
        transition: 'all 1s ease-in-out 0.2s',
        zIndex: 1000,
      },
      pacman: {
        position: 'absolute',
        transition: 'left 0.3s ease-in-out 0.2s',
        width: '20px',
        height: '20px',
        transform: 'translate(-5px, -5px)',
      },
      pacmanTop: {
        position: 'absolute',
        content: '',
        width: '20px',
        height: '10px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        background: colors.quartenary,
      },
      pacmanBottom: {
        position: 'absolute',
        content: '',
        width: '20px',
        height: '10px',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        background: colors.quartenary,
        top: '10px',
      },
      point: {
        position: 'absolute',
        float: 'left',
        background: 'transparent',
        width: '10px',
        height: '10px',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: colors.quartenary,
        borderRadius: '50%',
        transition: 'all 0.01s ease-out 0.4s',
      },
    },
    bar: {
      container: {
        position: 'absolute',
        height: '10px',
        width: '100%',
        bottom: 0,
        left: 0,
        transition: 'all 1s ease-in-out 0.2s',
        zIndex: 1000,
      },
      bar: {
        height: '100%',
        background: colors.quartenary,
        transition: 'all 0.3s ease-out',
      },
    },
    number: {
      container: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 1000,
        color: colors.quartenary,
      },
    },
  },
  components: {
    blockquote: {
      textAlign: 'left',
      position: 'relative',
      display: 'inline-block',
      margin: 20,
    },
    quote: {
      borderLeft: `1px solid ${colors.primary}`,
      paddingLeft: 40,
      display: 'block',
      color: colors.primary,
      fontSize: '4.9rem',
      lineHeight: 1,
      fontWeight: 'bold',
    },
    listItem: {
      fontFamily: fonts.body,
    },
    cite: {
      color: colors.tertiary,
      display: 'block',
      clear: 'left',
      fontSize: '2rem',
      marginTop: '1rem',
    },
    content: {
      margin: '0 auto',
      textAlign: 'center',
    },
    codePane: {
      pre: {
        margin: 'auto',
        fontSize: '0.8rem',
        fontWeight: 'normal',
        fontFamily: fonts.monospace,
        minWidth: '100%',
        maxWidth: 800,
      },
      code: {
        textAlign: 'left',
        fontWeight: 'normal',
      },
    },
    code: {
      color: 'black',
      fontSize: '2.66rem',
      fontFamily: fonts.monospace,
      margin: '0.25rem auto',
      backgroundColor: 'rgba(0,0,0,0.15)',
      padding: '0 10px',
      borderRadius: 3,
    },
    heading: {
      h1: {
        color: colors.quartenary,
        fontSize: '7.05rem',
        fontFamily: fonts.heading,
        lineHeight: 1,
        fontWeight: 800,
        margin: 0,
        zoom: 1,
      },
      h2: {
        color: colors.quartenary,
        fontSize: '5.88rem',
        fontFamily: fonts.heading,
        lineHeight: 1,
        fontWeight: 800,
        margin: 0,
      },
      h3: {
        color: colors.quartenary,
        fontSize: '4.9rem',
        fontFamily: fonts.secondary,
        lineHeight: 1,
        fontWeight: 800,
        margin: '0.5rem auto',
      },
      h4: {
        color: colors.quartenary,
        fontSize: '3.82rem',
        fontFamily: fonts.heading,
        lineHeight: 1,
        fontWeight: 800,
        margin: '0.5rem auto',
      },
      h5: {
        color: colors.quartenary,
        fontSize: '3.19rem',
        fontFamily: fonts.heading,
        lineHeight: 1,
        fontWeight: 800,
        margin: '0.5rem auto',
      },
      h6: {
        color: colors.quartenary,
        fontSize: '2.66rem',
        fontFamily: fonts.heading,
        lineHeight: 1,
        fontWeight: 800,
        margin: '0.5rem auto',
      },
    },
    image: {
      display: 'block',
      margin: '0.5rem auto',
    },
    link: {
      textDecoration: 'none',
    },
    listItem: {
      fontSize: '2.66rem',
    },
    list: {
      textAlign: 'left',
      listStylePosition: 'inside',
      padding: 0,
    },
    s: {
      strikethrough: {},
    },
    tableHeaderItem: {
      fontSize: '2.66rem',
      fontWeight: 'bold',
    },
    tableItem: {
      fontSize: '2.66rem',
    },
    table: {
      width: '100%',
    },
    text: {
      color: 'black',
      fontSize: '2.66rem',
      fontFamily: fonts.heading,
      margin: '0.25rem auto',
    },
  },
};
