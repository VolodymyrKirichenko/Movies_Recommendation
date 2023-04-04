import { Field } from 'react-final-form';
import TextField from '@mui/material/TextField';

export const ReleaseYearField = () => {
  return (
    <Field
      name="primaryReleaseYear"
      render={({ input }) => (
        <TextField
          id="outlined-basic"
          label="2023"
          variant="outlined"
          type="number"
          inputProps={{ min: 1800, max: 2030 }}
          {...input}
        />
      )}
    />
  );
};
