import { FormLabel, TextField, TextFieldProps } from '@mui/material';

interface TextfieldProps extends Omit<TextFieldProps, 'label'> {
  label?: string;
}

const Textfield = ({ label, ...props }: TextfieldProps) => {
  return (
    <>
      {label && <FormLabel className='!text-gray-50'>{label}</FormLabel>}
      <TextField {...props} className='bg-gray-100' {...props} />
    </>
  );
};

export default Textfield;
