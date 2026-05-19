import { Box, ListItem, ListItemButton, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/types/product';

import styles from './styles';

interface Props {
  product: Product;
  discount: number;
}

export default function CartItem({ product, discount }: Props) {
  return (
    <ListItem>
      <Link href={`/${product.id}`} style={styles.link}>
        <ListItemButton sx={styles.itemButton}>
          <Box sx={styles.product}>
            {product.images.length > 0 && (
              <Image
                src={product.images[0]}
                alt={product.title}
                width={50}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            )}
            <Typography>{product.title}</Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >{`x${product.minimumOrderQuantity}`}</Typography>
          </Box>

          <Box sx={styles.priceBox}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textDecoration: product.discountPercentage
                  ? 'line-through'
                  : 'none',
              }}
            >
              {`$${(product.price * product.minimumOrderQuantity).toFixed(2)}`}
            </Typography>
            {product.discountPercentage && (
              <Typography variant="body1" color="red">
                {`$${(discount * product.minimumOrderQuantity).toFixed(2)}`}
              </Typography>
            )}
          </Box>
        </ListItemButton>
      </Link>
    </ListItem>
  );
}
