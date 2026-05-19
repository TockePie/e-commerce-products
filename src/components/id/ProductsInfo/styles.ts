import { tableCellClasses } from '@mui/material/TableCell';

import { StylesType } from '@/types/mui';

const styles = {
  table: {
    [`& .${tableCellClasses.root}`]: {
      borderBottom: 'none',
    },
  },
  tableCell: {
    padding: '0.5rem',
  },
  propsTitleBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  title: {
    fontWeight: 'bold',
  },
} satisfies StylesType;

export default styles;
