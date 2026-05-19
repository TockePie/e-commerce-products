import { green, red } from '@mui/material/colors';

import { StylesType } from '@/types/mui';

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3.5rem',
    padding: '3rem',

    '@media (max-width: 768px)': {
      flexDirection: 'column',
      padding: '1rem',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    gap: 1.5,
    padding: 2,

    '@media (max-width: 768px)': {
      width: '100%',
      marginTop: 6,
    },
  },
  ratingBox: {
    pointerEvents: 'none',
    display: 'flex',
    gap: 2,
    alignItems: 'center',
  },
  priceAndCartBox: {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
  },
  stockStatus: {
    fontWeight: 'bold',
  },
  redText: {
    color: red[500],
  },
  greenText: {
    color: green[500],
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 2,
    gap: 2,
  },

  reviews: {
    box: {
      marginTop: '3.5rem',
      padding: '3rem',
    },
    title: {
      textAlign: 'center',
    },
    container: {
      display: 'grid',
      justifyContent: 'center',

      '@media (max-width: 768px)': {
        padding: '0 1rem',
      },
    },
  },
} satisfies StylesType;

export default styles;
