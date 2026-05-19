import { StylesType } from '@/types/mui';

const styles = {
  root: {
    display: 'inline-flex',
    position: 'relative',
    gridAutoFlow: 'row',
    cursor: 'pointer',
    left: 0,
    gap: '0.4rem',
  },
  star: {
    position: 'relative',
    display: 'inline-flex',
  },
  highlightedBox: {
    position: 'absolute',
    overflow: 'hidden',
  },
} satisfies StylesType;

export default styles;
