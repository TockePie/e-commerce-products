import { SxProps, Theme } from '@mui/material/styles';

export type StylesType = {
  [key: string]: SxProps<Theme> | StylesType;
};
