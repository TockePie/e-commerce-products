'use client';

import { useState } from 'react';
import { Button } from '@mui/material';

import ModalConfirm from '@/components/cart/ModalConfirm';
import { useCartStore } from '@/hooks/use-cart-store';

export default function ConfirmBtn() {
  const [open, setOpen] = useState(false);
  const cleanCart = useCartStore((state) => state.cleanCart);

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Order
      </Button>
      <ModalConfirm
        open={open}
        onConfirm={() => cleanCart()}
        onCancel={() => setOpen(false)}
      />
    </>
  );
}
