import { colors } from '../foundations/colors.theme';

export const Input = {
  defaultProps: {
    fontSize: 'md',
  },
  baseStyle: {
    _android: {
      style: {
        paddingLeft: 10,
      },
      _focus: {
        style: {
          paddingLeft: 10,
        },
      },
    },
    height: '40px',
    paddingX: '20px',
    backgroundColor: 'transparent',
    borderColor: 'primary.600',
    borderRadius: '0',
    placeholderTextColor: 'primary.600',
    color: 'primary.700',
    width: '100%',
    fontFamily: 'body',
    _focus: {
      style: {
        borderColor: colors.primary[700],
      },
    },
  },
};
