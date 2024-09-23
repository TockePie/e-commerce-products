import { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Modal,
  Box,
  Typography,
  Input,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

import useProducts from "@/hooks/use-products";

import styles from "./SearchModal.styles";

interface SearchModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SearchModal = ({ open, setOpen }: SearchModalProps) => {
  const { products, loading } = useProducts();
  const [searchPrompt, setSearchPrompt] = useState("");
  const router = useRouter();

  const filteredProducts = useMemo(() => {
    if (searchPrompt.length < 3) {
      return [];
    }
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchPrompt.toLowerCase())
    );
  }, [products, searchPrompt]);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={styles.modal}>
        <Input
          placeholder="Search..."
          onChange={(e) => setSearchPrompt(e.target.value)}
        />
        <List>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : (
            filteredProducts.map((product) => (
              <ListItem key={product.id}>
                <ListItemButton
                  sx={styles.itemButton}
                  onClick={() => {
                    router.replace(`/${product.id}`);
                    setOpen(false);
                  }}
                >
                  <Box sx={styles.product}>
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      width={50}
                      height={50}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                    <Typography key={product.id}>{product.title}</Typography>
                  </Box>
                  <Typography
                    key={product.id}
                  >{`$${product.price}`}</Typography>
                </ListItemButton>
              </ListItem>
            ))
          )}
        </List>
      </Box>
    </Modal>
  );
};

export default SearchModal;
