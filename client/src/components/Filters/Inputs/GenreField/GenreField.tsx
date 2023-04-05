import { Field } from 'react-final-form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FC } from 'react';
import { Genre } from '../../../typedefs/typedefs';

interface Props {
  data: {
    genres: Genre[];
  };
}

export const GenreField: FC<Props> = (props) => {
  const { data } = props;

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
            {data.genres.map(({ name, id }) => (
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
