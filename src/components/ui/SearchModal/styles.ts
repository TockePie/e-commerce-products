import modal from '@/styles/modal';
import { StylesType } from '@/types/mui';

const styles = {
  modal,
  item: {
    link: {
      width: '100%',
    },
    button: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    details: {
      display: 'flex',
      gap: 3,
      alignItems: 'center',
    },
    priceBox: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
  },
} satisfies StylesType;

export default styles;
