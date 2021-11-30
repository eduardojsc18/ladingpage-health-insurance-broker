module.exports = {
  purge: {
    enabled: true,
    content: ['./resources/view/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
    },

    container: {
      center: true,
    },

    fontFamily: {
      'roboto': ['"Roboto"', 'sans-serif'],
    },

    extend: {

      colors: {

        'background-site': '#dee5ee',

        text: {
          'primary': '#154784',
          'secondary': '#55555A'
        },

        orange: {
          'orange': '#f78600',
        },

        blue: {
          'contrast': '#327FDB',
          'light': '#2196f3',
          'dark': '#154784',
          'extra-dark': '#243A54'
        },

        btn: {
          'orange': '#ff9800',
          'orange-hover': '#E08805',
          'blue': '#2196f3',
          'blue-hover': '#0D77CC',
          'green': '#2f9433',
          'green-hover': '#3F8A41',
          'gray': '#dee5ee',
          'gray-hover': '#C2D5EF'
        },

        'triangle-shape': {
          'contact': '#A08F75'
        }

      },

      backgroundImage: {
        'header-md': 'url("../img/banners/plantao-saude-1-background-header.webp")',
        'header': 'url("../img/banners/fundo-topo-mobile.webp")'
      },

      width: {
        '171px': '171px',
        '300px': '300px',
        '330px': '330px',
        '7px': '7px',

      },

      height: {
        '35px': '35px',
        '83px': '83px',
        '300px': '300px',
        '330px': '330px',
      },

      zIndex: {
        '-1': '-1'
      },

      rotate: {
        '-30': '-30deg',
        '30': '30deg'
      },

      scale: {
        '120': '1.2'
      },

      inset: {
        '-7px': '-7px',
        '-36px': '-36px'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
