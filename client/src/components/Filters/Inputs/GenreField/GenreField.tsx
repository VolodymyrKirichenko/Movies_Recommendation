import { Field } from 'react-final-form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const GenreField = ({ data }: any) => {
  return (
    <Field
      name="genre"
      render={({ input }) => (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            autoWidth
            label="Genre"
            {...input}
          >
            {data.genres.map(({ name, id }: {name: number, id: number}) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};
