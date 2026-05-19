import { StylesType } from '@/types/mui';

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: { xs: '3.5rem', xl: '4rem' },
    marginLeft: { xl: '5vw' },
    marginRight: { xl: '5vw' },
    gap: '2rem',
    padding: {
      xs: '2rem 1rem',
      sm: '2rem 1rem',
      md: '2rem 7vw',
      lg: '2rem 4vw',
      xl: '3rem',
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',

    '@media (max-width: 767px)': {
      flexDirection: 'column',
      gap: '0.5rem',
    },
  },

  loading: {
    box: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    spinner: {
      fontSize: 40,
      '@media (prefers-color-scheme: dark)': {
        color: 'white',
      },
      color: 'black',
      '@keyframes spin': {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
      animation: 'spin 2s linear infinite',
    },
  },
} satisfies StylesType;

export default styles;
