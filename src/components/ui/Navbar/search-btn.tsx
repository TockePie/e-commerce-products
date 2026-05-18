'use client';

import { Button } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Navbar.styles';
import SearchModal from '../SearchModal/SearchModal';

export default function SearchBtn() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        sx={styles.searchButton}
        onClick={() => setOpen(true)}
      >
        <SearchIcon />
        Search
      </Button>
      <SearchModal open={open} setOpen={setOpen} />
    </>
  );
}
