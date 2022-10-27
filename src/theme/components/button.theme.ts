import { colors } from '../foundations/colors.theme';

export const Button = {
  baseStyle: {
    height: '34px',
    width: '240px',
    borderRadius: '2px',
    _text: {
      fontWeight: 400,
      fontFamily: 'body',
      lineHeight: '16.5px',
    },
  },
  sizes: {
    rectangular_primary: {
      width: '240px',
      height: '30px',
    },
    rectangular_secondary: {
      width: '320px',
      height: '40px',
    },
  },
  variants: {
    black: {
      borderColor: 'primary.700',
      backgroundColor: 'primary.700',
      _text: {
        color: 'primary.100',
      },
      _pressed: {
        bgColor: colors.hover.blackHover,
        _text: {
          color: 'primary.100',
        },
      },
    },
    red: {
      borderColor: colors.simpleColors.red,
      backgroundColor: colors.simpleColors.red,
      _text: {
        color: 'primary.100',
      },
      _pressed: {
        bgColor: colors.hover.redHover,
        _text: {
          color: 'primary.100',
        },
      },
    },
    green: {
      borderColor: 'secondary.400',
      backgroundColor: 'secondary.400',
      _text: {
        color: 'primary.100',
      },
      _pressed: {
        bgColor: colors.hover.greenHover,
        _text: {
          color: 'primary.100',
        },
      },
    },
    grey: {
      borderColor: 'primary.600',
      backgroundColor: 'primary.600',
      _text: {
        color: 'primary.700',
      },
      _pressed: {
        bgColor: colors.hover.greyHover,
        _text: {
          color: 'primary.700',
        },
      },
    },
    darkBlue: {
      borderColor: colors.dark.darkBlue,
      backgroundColor: colors.dark.darkBlue,
      _text: {
        color: 'primary.100',
      },
      _pressed: {
        bgColor: colors.hover.darkBlueHover,
        _text: {
          color: 'primary.100',
        },
      },
    },
  },
};
