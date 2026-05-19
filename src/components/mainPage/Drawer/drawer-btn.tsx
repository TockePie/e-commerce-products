'use client';

import { useState } from 'react';
import { Box, Button } from '@mui/material';

import { FilterState } from '@/types/filter-state';

import DrawerComponent from '.';

export default function DrawerBtn({
  initialFilters,
}: {
  initialFilters: FilterState;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Filter</Button>

      <DrawerComponent
        open={open}
        onClose={() => setOpen(false)}
        initialFilters={initialFilters}
      />
    </Box>
  );
}
