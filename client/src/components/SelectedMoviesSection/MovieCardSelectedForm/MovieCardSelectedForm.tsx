import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import { FC, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import { Errors, Values } from '../../typedefs/typedefs';

interface Props {
  onSubmit: (values: Values) => void;
}

export const MovieCardSelectedForm: FC<Props> = (props) => {
  const { onSubmit } = props;
  const [isClick, isSetClick] = useState(false);
  const intl = useIntl();

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values: Values) => {
        const errors: Errors = {};

        if (!values.listName) {
          errors.listName = 'Required';
        }

        return errors;
      }}
      render={({ handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          <Paper
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Field<string>
              name="listName"
              render={({ input }) => (
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder={intl.formatMessage({ id: 'placeholder' })}
                  inputProps={{ 'aria-label': 'put list name' }}
                  {...input}
                />
              )}
            />

            {(errors?.listName && isClick) && (
              <Typography color="error">{errors.listName}</Typography>
            )}

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            <IconButton
              type="submit"
              color="primary"
              sx={{ p: '10px' }}
              aria-label="directions"
              onClick={() => isSetClick(true)}
            >
              <CheckIcon />
            </IconButton>
          </Paper>
        </form>
      )}
    />
  );
};
