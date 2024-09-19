import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Typography,
  tableCellClasses,
} from "@mui/material";

import { ProductType } from "@/types/cardTypes";

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
                  <TableCell
                    sx={{
                      padding: "0.5rem",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {key}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "0.5rem",
                    }}
                  >
                    {value}
                  </TableCell>
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsInfo;
