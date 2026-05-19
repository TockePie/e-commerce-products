const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: { xs: 310, sm: 400 },
    height: { xs: 180, md: 200 },
  },
  actionArea: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  imgBox: {
    position: 'relative',
    flexShrink: 0,
    width: { xs: 100, md: 150, lg: 175, xl: 200 },
    height: { xs: 100, md: 150, lg: 175, xl: 200 },
  },
  brandText: {
    display: 'flex',
  },
  title: {
    small: {
      fontSize: '1rem',
    },
    default: {
      fontSize: '1.2rem',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  ratingBox: {
    marginTop: '10px',
  },
  priceBox: {
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
};

export default styles;
