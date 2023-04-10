import React, { FC, useMemo } from 'react';
import { Button, Drawer, Hidden } from '@mui/material';
import { useQuery } from '@apollo/client';
import { MoviesFilterInput } from '../../typedefs/typedefs';
import { FilterList } from '../FiltersList/FiltersList';
import { GENRES_QUERY } from '../queries';

interface Props {
  filter: MoviesFilterInput,
  onSubmit: (data: MoviesFilterInput) => void,
  isDrawerOpen: boolean,
  onChangeDrawer: () => void,
}

export const FilterMenu: FC<Props> = (props) => {
  const {
    filter,
    onSubmit,
    isDrawerOpen,
    onChangeDrawer,
  } = props;

  const { data: genresData } = useQuery(GENRES_QUERY);

  const list = useMemo(() => (
    <FilterList
      filter={filter}
      genresData={genresData}
      onSubmit={onSubmit}
    />
  ), [filter, genresData, onSubmit]);

  return (
    <>
      <Hidden only={['lg', 'xl', 'md']}>
        <Button
          variant="contained"
          onClick={onChangeDrawer}
          sx={{ mr: 2 }}
        >
          Filters
        </Button>
      </Hidden>

      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={onChangeDrawer}
      >
        {list}
      </Drawer>
    </>
  );
};
