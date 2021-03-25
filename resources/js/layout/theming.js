const typography = {
  fontFamily: '"Montserrat", sans-serif',
  fontSize: 14,
  fontStyle: "normal",
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
};

const typographyBase = {
  fontFamily: typography.fontFamily,
  fontSize: typography.fontSize,
  fontStyle: typography.fontStyle,
};

const palette = {
  primary: {
    main: '#024B78',  // Verde oscuro
    light: '#FFF5F6', // Blanco
    dark: '#011C2C',  // Negro
  },
  secondary: {
    main: '#0296B0',   // Verde
    light: '#E8E8E8',
    dark: '#283436', // Gray
  },
  error: {
    main: '#E1303A',  // Rojo
  },
  background: {
    default: '#fff5f6',
  },
};

const theme = {
  palette: { ...palette },
  typography: {
    ...typographyBase
  },
  shape: {
    borderRadius: 10,
  },
  overrides: {
    MuiTypography: {
      root: {
        color: palette.primary.dark
      }
    },
    RaMenuItemLink: {
      root: {
        fontWeight: '700',
        fontSize: '14px',
        color: palette.primary.light
      },
      active: {
        color: palette.primary.light,
        backgroundColor: 'rgba(225,48,58,0.5)',
      },
    },
    MuiListItemIcon: {
      root: {
        color: palette.primary.light
      }
    },
    MuiInputBase: {
      input: {
        background: '#fff',
        border: '0.5px solid #748588'
      }
    },
    RaLabeled: {
      value: {
        backgroundColor: '#808080'
      }
    },
    RaImageInput: {
      dropZone: {
        backgroundColor: '#808080'
      }
    },
    RaToolbar: {
      toolbar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: "flex-end"
      }
    },
    RaSaveButton: {
      button: {
        borderRadius: '0',
        textTransform: 'capitalize'
      }
    },
    MuiPaper: {
      elevation1: {
        boxShadow: 'none',
      },
      root: {
        border: '1px solid #e0e0e3',
        backgroundClip: 'padding-box',
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: '#fff',
        color: '#4f3cc9',
        boxShadow: 'none',
      },
    },
    MuiButtonBase: {
      root: {
        '&:hover:active::after': {
          // recreate a static ripple color
          // use the currentColor to make it work both for outlined and contained buttons
          // but to dim the background without dimming the text,
          // put another element on top with a limited opacity
          content: '""',
          display: 'block',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: 'currentColor',
          opacity: 0.3,
          borderRadius: 'inherit',
        },
      },
    },
    MuiAppBar: {
      colorSecondary: {
        color: '#808080',
        backgroundColor: '#fff',
      },
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: '#f5f5f5',
      },
      barColorPrimary: {
        backgroundColor: '#d7d7d7',
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        '&$disabled': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
    },
    MuiSnackbarContent: {
      root: {
        border: 'none',
      },
    },
    MuiSidebar: {
      root: {
        color: '#808080',
        backgroundColor: '#024B78',
      },
    },
  },
  props: {
    MuiButtonBase: {
      // disable ripple for perf reasons
      disableRipple: true,
    },
  },
};

export default theme;
