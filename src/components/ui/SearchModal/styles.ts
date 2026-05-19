import { StylesType } from '@/types/mui';

const styles = {
  modal: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

    '@media (max-width: 768px)': {
      width: '95%',
    },
  },
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
