import { Field } from 'react-final-form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Genres } from '../../../typedefs/typedefs';

interface Props {
  data: Genres;
}

export const GenreField: FC<Props> = (props) => {
  const { data } = props;

  return (
    <Field
      name="genre"
      render={({ input }) => (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">
            <FormattedMessage id="genres.Genre" />
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            autoWidth
            label="Genre"
            {...input}
          >
            {data.genres.map(({ name, id }) => (
              <MenuItem key={id} value={id}>
                <FormattedMessage id={`genres.${name}`} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};
