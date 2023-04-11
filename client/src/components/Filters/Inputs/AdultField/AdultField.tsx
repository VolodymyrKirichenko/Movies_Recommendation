import { Field } from 'react-final-form';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const AdultField = () => (
  <Field
    name="includeAdult"
    type="checkbox"
    render={({ input }) => (
      <FormControlLabel control={<Checkbox {...input} />} label="18+" />
    )}
  />
);
