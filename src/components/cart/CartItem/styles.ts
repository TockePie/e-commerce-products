import { StylesType } from '@/types/mui';

const styles = {
  link: {
    width: '100%',
  },
  product: {
    display: 'flex',
    gap: 3,
    alignItems: 'center',
  },
  itemButton: {
    display: 'flex',
    justifyContent: 'space-between',

    '@media (max-width: 767px)': {
      flexDirection: 'column',
      gap: '1rem',
    },
  },
  priceBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
} satisfies StylesType;

export default styles;
