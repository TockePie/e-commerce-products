import { StylesType } from '@/types/mui';

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: { xs: '3.5rem', xl: '4rem' },
    gap: '2rem',
    padding: {
      xs: '2rem 1rem',
      md: '2rem 7vw',
      lg: '2rem 4vw',
    },
    marginLeft: { lg: '20vw' },
    marginRight: { lg: '20vw' },
  },
  emptyText: {
    padding: '2rem',
    textAlign: 'center',
    width: '100%',
  },
  cart: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 2,
    width: '100%',
  },
} satisfies StylesType;

export default styles;
