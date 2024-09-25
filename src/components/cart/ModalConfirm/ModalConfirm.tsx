import { Box, Button, Modal, Typography } from "@mui/material";

import styles from "./ModalConfirm.styles";
import constants from "./ModalConfirm.constants";

interface ModalConfirmProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  setCartItems: (value: string | null) => void;
}

const ModalConfirm = ({ open, setOpen, setCartItems }: ModalConfirmProps) => {
  const yesButton = () => {
    localStorage.removeItem("cart");
    setCartItems(null);
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={styles.modal}>
        <Typography>{constants.question}</Typography>
        <Box sx={styles.buttonBox}>
          <Button variant="contained" color="primary" onClick={yesButton}>
            {constants.yes}
          </Button>
          <Button variant="outlined" onClick={() => setOpen(false)}>
            {constants.no}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalConfirm;
