import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MovieCardSelected } from '../components/SelectedMoviesSection/MovieCardSelected/MovieCardSelected';
import { movies } from './stub';

export default {
  title: 'Card/MovieCardSelected',
  component: MovieCardSelected,
} as ComponentMeta<typeof MovieCardSelected>;

const Template: ComponentStory<typeof MovieCardSelected> = (
  args,
) => <MovieCardSelected {...args} />;

export const SelectedCard = Template.bind({});

SelectedCard.args = {
  movie: movies[0],
};
