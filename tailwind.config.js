/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

// const { colors, fontWeight } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    options: {
      whitelistPatterns: [/btn/, /group-hover/],
    },
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: {
        dark: '#000',
        default: '#323232',
        light: '#555',
      },
      white: '#fff',

      inherit: 'inherit',

      line: '#eaeaea',

      secondary: {
        default: 'var(--color-secondary)',
        dark: 'var(--color-secondary-dark)',
      },

      primary: {
        dark: '#5039DF',
        default: '#5D44F6',
        light: '#7867FB',
      },
      red: {
        dark: '#DF1509',
        default: '#FF3B30',
        light: '#FF725F',
      },

      gray: {
        100: '#F2F2F2',
        200: '#222222',
        300: '#323232',
        400: '#4a4a4a',
        500: '#EEEEEF',
        800: '#D8D8D8',
        default: '#999999',
        900: '#989898',
      },
      green: {
        dark: '#33B81D',
        default: '#1DCF00',
        light: '#3EDC74',
      },
      blue: {
        dark: '#2871D0',
        default: '#1877F2',
        light: '#3D8FFA',
      },
    },
    btn: {
      bold: '500',
      shadow: '0px 1px .5rem rgba(0, 0, 0, 0.05)',
      disabled: {
        backgroundColor: '#E5E5E5',
        color: '#CBCBCB',
      },
      colors: {
        primary: {
          color: '#fff',
          default: '#5D44F6',
          hover: '#7867FB',
          active: '#5039DF',
        },
        blue: {
          color: '#fff',
          active: '#2871D0',
          default: '#1877F2',
          hover: '#3D8FFA',
        },
        green: {
          color: '#fff',
          default: '#1DCF00',
          active: '#33B81D',
          hover: '#3EDC74',
        },
        red: {
          color: '#fff',
          default: '#FF0000',
          hover: '#ff9090',
          active: '#d60000',
        },
        black: {
          color: '#fff',
          active: '#000',
          default: '#323232',
          hover: '#555',
        },
        gray: {
          color: '#fff',
          active: '#000',
          default: '#AEAEAE',
          hover: '#323232',
        },
        white: {
          color: '#323232',
          active: '#fff',
          default: '#fff',
          hover: '#fff',
        },
      },
      sizes: {
        tiny: {
          fontSize: '1.4rem',
          height: '2.8rem',
          padding: '0 1rem',
        },
        sm: {
          fontSize: '1.4rem',
          height: '3.5rem',
          padding: '0 1.5rem',
        },
        md: {
          fontSize: '1.6rem',
          height: '4.5rem',
          padding: '0 3.5rem',
        },
        lg: {
          fontSize: '1.8rem',
          height: '5.3rem',
          padding: '0 4rem',
        },
      },
    },
    // btn: {
    //    bold: '500',
    //    colors: ['primary', 'green', 'blue', 'red', 'black'],
    //    shadow: '0px 1px .5rem rgba(0, 0, 0, 0.05)',
    //    disabled: {
    //       backgroundColor: '#E5E5E5',
    //       color: '#CBCBCB',
    //    },
    //    sizes: {
    //      tiny: {
    //        height: '2.5rem',
    //        padding: '0 1rem',
    //      },
    //      sm: {
    //        height: '3.5rem',
    //        padding: '0 1.5rem',
    //      },
    //      md: {
    //        height: '4.5rem',
    //        padding: '0 3.5rem',
    //      },
    //      lg: {
    //        height: '6rem',
    //        padding: '0 5rem',
    //      },
    //    },
    // },
    //  fontFamily: {
    //    primary: 'Manrope, sans-serif',
    //    // secondary: "Manrope, sans-serif",
    //  },
    fontFamily: {
      primary: 'Poppins, sans-serif',
      secondary: '"Kalam", sans-serif',
    },

    boxShadow: {
      // default:
      //    "1rem 1.5rem 9rem rgba(0, 0, 0, 0.15), 0px 0px 0.5px rgba(0, 0, 0, 0.7), 0px 1px .3rem rgba(0, 0, 0, 0.1), 1px .4rem 1.5rem rgba(0, 0, 0, 0.08)",
      outline: '0 0 0 .3rem rgba(93, 68, 246, 0.5)',
      default: '0px 1px 2px rgba(0, 0, 0, 0.05), 1px 4px 5px rgba(0, 0, 0, 0.03)',
      up: '0px -1px 2px rgba(0, 0, 0, 0.05), 1px -4px 5px rgba(0, 0, 0, 0.03)',
      // default: '0px 1px .5rem rgba(0, 0, 0, 0.05)',
      lg:
        '0px 0px 0.5px rgba(0, 0, 0, 0.7), 0px 1px 3px rgba(0, 0, 0, 0.1), 1px 4px 15px rgba(0, 0, 0, 0.08)',
      border:
        '1rem 1.5rem 4rem rgba(0, 0, 0, 0.15), 0px 0px 0.5px rgba(0, 0, 0, 0.7), 0px 1px .3rem rgba(0, 0, 0, 0.1), 1px .4rem 1.5rem rgba(0, 0, 0, 0.08)',
      none: 'none',
    },
    columnCount: [1, 2, 3, 4],
    borderRadius: {
      none: '0',
      sm: '.25rem',
      default: '.5rem',
      lg: '1rem',
      xl: '1.5rem',
      full: '9999px',
    },
    lineHeight: {
      none: '1',
      tiny: '1.15',
      tight: '1.25',
      snug: '1.375',
      normal: '1.666',
      loose: '2.1',
    },
    fontSize: {
      nano: ['1rem'],
      tiny: ['1.2rem', '1.5'],
      sm: ['1.4rem', '1.5'],
      base: ['1.6rem', '1.5'],
      lg: ['1.8rem', '1.5'],
      big: ['2.1rem', '1.5'],
      xl: ['2.4rem', '1.33'],
      'mob-2xl': ['2.8rem', '1.33'],
      '2xl': ['3.2rem', '1.33'],
      '3xl': ['4.8rem', '1.145'],
    },
    aspectRatio: {
      // defaults to {}
      none: 0,
      square: [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9], // or 16 / 9
      '4/3': [4, 3], // or 4 / 3
      '21/9': [21, 9], // or 21 / 9
      '3/2': [3, 2],
      '2/1': [2, 1],
    },
    inset: {
      20: '2rem',
    },
    extend: {
      opacity: {
        5: '0.05',
        20: '0.2',
        10: '0.1',
        35: '0.35',
        40: '0.40',
        60: '0.60',
        80: '0.80',
        99: '0.99',
      },
      borderWidth: {
        5: '.5rem',
      },
      scale: {
        60: '.60',
        85: '.85',
      },
      typography: {
        default: {
          css: {
            fontSize: 'inherit',
            lineHeight: 'inherit',
            maxWidth: '',
            color: '#000',
            h2: {
              fontSize: '1.7em',
            },
            p: {
              marginTop: '1.7em',
              marginBottom: '1.7em',
            },
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              borderBottom: 'none',
              // backgroundImage: 'linear-gradient(90deg,currentColor,currentColor)',
              // backgroundPosition: '100% 90%',
              // backgroundSize: '100% 1px',
            },
          },
        },
      },
      inset: {
        0: '0',
        '1/2': '50%',
        auto: 'auto',
      },
      fill: {
        main: 'var(--color-main)',
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        primary: 'var(--color-primary)',
        red: 'var(--color-red)',
        green: 'var(--color-green)',
        blue: 'var(--color-blue)',
        yellow: 'var(--color-yellow)',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      },
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '.3rem',
      4: '.4rem',
      5: '.5rem',
      6: '.6rem',
      7: '.7rem',
      8: '.8rem',
      10: '1rem',
      12: '1.2rem',
      13: '1.3rem',
      14: '1.4rem',
      15: '1.5rem',
      16: '1.6rem',
      17: '1.7rem',
      18: '1.8rem',
      20: '2rem',
      21: '2.1rem',
      22: '2.2rem',
      25: '2.5rem',
      30: '3rem',
      35: '3.5rem',
      40: '4rem',
      45: '4.5rem',
      50: '5rem',
      55: '5.5rem',
      60: '6rem',
      65: '6.5rem',
      70: '7rem',
      75: '7.5rem',
      80: '8rem',
      85: '8.5rem',
      90: '9rem',
      95: '9.5rem',
      100: '10rem',
      110: '11rem',
      120: '12rem',
      130: '13rem',
      150: '15rem',
      160: '16rem',
      165: '16.5rem',
      180: '18rem',
      200: '20rem',
      210: '21rem',
      230: '23rem',
      250: '25rem',
      280: '28rem',
      300: '30rem',
      350: '35rem',
      400: '40rem',
      450: '45rem',
      460: '46rem',
      500: '50rem',
      550: '55rem',
      600: '60rem',
      650: '65rem',
      700: '70rem',
      750: '75rem',
      800: '80rem',
      830: '83rem',
      900: '90rem',
      950: '95rem',
      1000: '100rem',
      1100: '110rem',
      1200: '120rem',
    },
    minHeight: {
      70: '7rem',
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      'min-content': 'min-content',
      // '3xl': '48rem',
      // '4xl': '56rem',
      // '5xl': '64rem',
      // '6xl': '72rem',
      xs: '27rem',
      sm: '30rem',
      md: '40rem',
      lg: '46rem',
      xl: '64rem',
      '2xl': '83rem',
      full: '100%',
      ...breakpoints(theme('screens')),
    }),
  },
  corePlugins: {
    container: false,
    // divideColor: false,
    // divideOpacity: false,
    // divideWidth: false,
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
    require('tailwindcss-multi-column')(),
    require('./tailwindcss-btn.js'),
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
    plugin(({ addUtilities, addComponents }) => {
      const images = {
        '.image-full': {
          width: '100%',
          height: '100%',
          'object-fit': 'cover',
          'object-position': 'center',
        },
        '.transition-inherit': {
          transition: 'inherit',
        },
        '.absolute-center': {
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
        },
        '.fixed-center': {
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
        },
      }
      addUtilities(images)

      addComponents(
        {
          '.px-container': {
            paddingLeft: 'var(--container-padding)',
            paddingRight: 'var(--container-padding)',
          },
          '.-mx-container': {
            marginLeft: 'calc(var(--container-padding) * -1)',
            marginRight: 'calc(var(--container-padding) * -1)',
          },
        },
        {
          variants: ['responsive'],
        }
      )
    }),
  ],
  variants: {
    accessibility: ['responsive'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundImage: ['responsive'],
    // gradientColorStops: ["responsive", "hover", "focus"],
    backgroundOpacity: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    borderOpacity: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-visible'],
    boxSizing: ['responsive'],
    // container: ["responsive"],
    cursor: ['responsive'],
    display: ['responsive'],
    divideColor: ['responsive'],
    divideOpacity: ['responsive'],
    divideStyle: ['responsive'],
    divideWidth: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    // listStylePosition: ["responsive"],
    // listStyleType: ["responsive"],
    margin: ['responsive', 'first', 'last'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'focus-visible'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    overscrollBehavior: ['responsive'],
    padding: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    placeholderOpacity: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    // resize: ["responsive"],
    space: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
    textOpacity: ['responsive', 'hover', 'focus', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    // userSelect: ["responsive"],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    // wordBreak: ["responsive"],
    zIndex: ['responsive'],
    gap: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus', 'active'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
    transitionDelay: ['responsive'],
    animation: ['responsive'],
    typography: [],
    aspectRatio: ['responsive'],
  },
}
