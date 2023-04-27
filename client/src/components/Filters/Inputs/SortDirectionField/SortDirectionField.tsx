import { FormattedMessage } from 'react-intl';
import { Field } from 'react-final-form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { SORT_DIRECTION } from '../../variables';

export const SortDirectionField = () => {
  return (
    <Field
      name="sortDirection"
      render={({ input }) => (
        <FormControl>
          <FormLabel id="sort_direction">
            <FormattedMessage id="sort_direction.sort" />
          </FormLabel>

          <RadioGroup
            type="radio"
            row
            {...input}
          >
            <FormControlLabel
              value={SORT_DIRECTION.ASC}
              control={<Radio />}
              label="asc"
            />

            <FormControlLabel
              value={SORT_DIRECTION.DESC}
              control={<Radio />}
              label="desc"
            />
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};
