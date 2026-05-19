import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';

import { Product } from '@/types/product';

import PRODUCT_DETAILS from './constants';
import styles from './styles';

export default function ProductsInfo({ product }: { product: Product }) {
  return (
    <TableContainer>
      <Table sx={styles.table}>
        <TableBody>
          {PRODUCT_DETAILS.map((item) => {
            const Icon = item.icon;
            if (!item.value) return null;

            return (
              <TableRow key={item.value}>
                <TableCell sx={[styles.tableCell, styles.propsTitleBox]}>
                  <Icon />
                  <Typography variant="body1" sx={styles.title}>
                    {item.title}
                  </Typography>
                </TableCell>
                <TableCell sx={styles.tableCell}>
                  {product[item.value]}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
