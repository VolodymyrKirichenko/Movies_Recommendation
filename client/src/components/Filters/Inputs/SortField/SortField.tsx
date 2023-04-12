import { Field } from 'react-final-form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// eslint-disable-next-line import/no-extraneous-dependencies
import { FormattedMessage } from 'react-intl';
import React from 'react';
import { SORT_OPTIONS } from '../../variables';

export const SortField = () => {
  return (
    <Field
      name="sortBy"
      render={({ input }) => (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">
            <FormattedMessage id="sort_field.sort" />
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            autoWidth
            label="sortField"
            {...input}
          >
            {SORT_OPTIONS.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                <FormattedMessage id={`sort_field.${label}`} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};
