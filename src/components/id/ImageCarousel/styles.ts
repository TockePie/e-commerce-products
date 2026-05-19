import { StylesType } from '@/types/mui';

const styles = {
  imgBox: {
    position: 'relative',
    width: { xs: '100%', md: '50%' },
    height: { xs: '50vh', md: '80vh', '2xl': '35rem' },
    overflow: 'hidden',
    borderRadius: 2,
    backgroundColor: 'background.default',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  dotsBox: {
    position: 'absolute',
    bottom: 16,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: 1,
    p: 1,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  dots: {
    height: 8,
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  backButton: {
    position: 'absolute',
    top: '50%',
    left: 16,
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'common.white',
    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  },
  forwardButton: {
    position: 'absolute',
    top: '50%',
    right: 16,
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'common.white',
    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  },
} satisfies StylesType;

export default styles;
