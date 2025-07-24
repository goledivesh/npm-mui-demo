import { ButtonProps, Button as MUIButton } from '@mui/material';

interface MUIButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

const Button = ({ children, ...props }: MUIButtonProps) => {
  return <MUIButton {...props}>{children}</MUIButton>;
};

export default Button;
