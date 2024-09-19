import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Typography,
  tableCellClasses,
} from "@mui/material";

import { ProductType } from "@/types/productTypes";

import styles from "./ProductsInfo.styles";

const ProductsInfo = (data: ProductType) => {
  const productDetails = [
    { key: "Brand", value: data.brand },
    { key: "Category", value: data.category },
    { key: "Shipping", value: data.shippingInformation },
    { key: "Warranty", value: data.warrantyInformation },
    { key: "Return", value: data.returnPolicy },
  ];

  return (
    <TableContainer>
      <Table
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
        }}
      >
        <TableBody>
          {productDetails.map(
            ({ key, value }) =>
              value && (
                <TableRow key={key}>
                  <TableCell sx={styles.tableCell}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
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
