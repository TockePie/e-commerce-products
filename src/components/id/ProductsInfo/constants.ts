import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SellIcon from '@mui/icons-material/Sell';

const PRODUCT_DETAILS = [
  {
    title: 'Brand',
    value: 'brand',
    icon: SellIcon,
  },
  {
    title: 'Category',
    value: 'category',
    icon: CategoryIcon,
  },
  {
    title: 'Shipping',
    value: 'shippingInformation',
    icon: LocalShippingIcon,
  },
  {
    title: 'Warranty',
    value: 'warrantyInformation',
    icon: BeenhereIcon,
  },
  {
    title: 'Return',
    value: 'returnPolicy',
    icon: AssignmentReturnIcon,
  },
] as const;

export default PRODUCT_DETAILS;
