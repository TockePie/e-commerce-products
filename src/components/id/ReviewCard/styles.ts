import { StylesType } from '@/types/mui';

const styles = {
  card: {
    margin: '1rem',
    paddingTop: '5vh',
    alignItems: 'center',
    textAlign: 'center',
    width: 300,
    height: 200,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
} satisfies StylesType;

export default styles;
