import { Field } from 'react-final-form';
import TextField from '@mui/material/TextField';

export const YearField = () => {
  return (
    <Field
      name="year"
      render={({ input }) => (
        <TextField
          id="outlined-basic"
          label="1800"
          variant="outlined"
          type="number"
          inputProps={{ min: 1800, max: 2030 }}
          {...input}
        />
      )}
    />
  );
};
