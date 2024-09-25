import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

import SellIcon from "@mui/icons-material/Sell";
import CategoryIcon from "@mui/icons-material/Category";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";

import { ProductType } from "@/types/product";

import styles from "./ProductsDetails.styles";

const ProductsInfo = (data: ProductType) => {
  const productDetails = [
    { key: "Brand", value: data.brand, icon: <SellIcon /> },
    { key: "Category", value: data.category, icon: <CategoryIcon /> },
    {
      key: "Shipping",
      value: data.shippingInformation,
      icon: <LocalShippingIcon />,
    },
    {
      key: "Warranty",
      value: data.warrantyInformation,
      icon: <BeenhereIcon />,
    },
    { key: "Return", value: data.returnPolicy, icon: <AssignmentReturnIcon /> },
  ];

  return (
    <TableContainer>
      <Table sx={styles.table}>
        <TableBody>
          {productDetails.map(
            ({ key, value, icon }) =>
              value && (
                <TableRow key={key}>
                  <TableCell sx={[styles.tableCell, styles.propsTitleBox]}>
                    {icon}
                    <Typography variant="body1" sx={styles.title}>
                      {key}
                    </Typography>
                  </TableCell>
                  <TableCell sx={styles.tableCell}>{value}</TableCell>
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsInfo;
