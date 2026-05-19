'use client';

import { Slide, useScrollTrigger } from '@mui/material';

export default function Slider({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
