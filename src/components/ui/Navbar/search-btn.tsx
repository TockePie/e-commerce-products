'use client';

import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

import SearchModal from '../SearchModal';

import styles from './Navbar.styles';

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
