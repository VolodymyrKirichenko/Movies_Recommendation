import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MovieCard } from '../components/MovieCard/MovieCard';
import { movies } from './stub';

export default {
  title: 'Card/MovieCard',
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => <MovieCard {...args} />;

export const MainCard = Template.bind({});

MainCard.args = {
  movie: movies[0],
};
