import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SellIcon from '@mui/icons-material/Sell';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';

import { Product } from '@/types/product';

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

const PRODUCT_DETAILS = [
  {
    title: 'Brand',
    value: 'brand',
    icon: SellIcon,
  },
  {
    title: 'Category',
    value: 'category',
    icon: CategoryIcon,
  },
  {
    title: 'Shipping',
    value: 'shippingInformation',
    icon: LocalShippingIcon,
  },
  {
    title: 'Warranty',
    value: 'warrantyInformation',
    icon: BeenhereIcon,
  },
  {
    title: 'Return',
    value: 'returnPolicy',
    icon: AssignmentReturnIcon,
  },
] as const;
