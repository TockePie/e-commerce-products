'use client';

import { Box, Button, Modal, Typography } from '@mui/material';

import styles from './styles';

interface Props {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ModalConfirm({ open, onConfirm, onCancel }: Props) {
  return (
    <Modal open={open} onClose={onCancel}>
      <Box sx={styles.modal}>
        <Typography>Do you want to order the products in your cart?</Typography>
        <Box sx={styles.buttonBox}>
          <Button variant="contained" color="primary" onClick={onConfirm}>
            Confirm
          </Button>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
