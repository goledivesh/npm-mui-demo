import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps, TextFieldProps } from '@mui/material';

interface MUIButtonProps extends ButtonProps {
    children?: React.ReactNode;
}
declare const Button: ({ children, ...props }: MUIButtonProps) => react_jsx_runtime.JSX.Element;

interface TextfieldProps extends Omit<TextFieldProps, 'label'> {
    label?: string;
}
declare const Textfield: ({ label, ...props }: TextfieldProps) => react_jsx_runtime.JSX.Element;

export { Button, Textfield };
