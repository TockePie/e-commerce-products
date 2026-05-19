import { Box, ListItem, ListItemButton, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/types/product';

import styles from './styles';

interface Props {
  product: Product;
  discount: number;
  onLeave: () => void;
}

export default function SearchItem({ product, discount, onLeave }: Props) {
  return (
    <ListItem>
      <Link href={`/${product.id}`} style={styles.item.link}>
        <ListItemButton sx={styles.item.button} onClick={onLeave}>
          <Box sx={styles.item.details}>
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
          </Box>

          <Box sx={styles.item.priceBox}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textDecoration: product.discountPercentage
                  ? 'line-through'
                  : 'none',
              }}
            >
              {`$${product.price}`}
            </Typography>
            {product.discountPercentage && (
              <Typography variant="body1" color="red">
                {`$${discount}`}
              </Typography>
            )}
          </Box>
        </ListItemButton>
      </Link>
    </ListItem>
  );
}
