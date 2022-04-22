import { Handler } from 'aws-lambda';
import { GenreController } from './genre.controller';

const artistController = new GenreController()

export const getGenre: Handler = async () => {
  return artistController.getGenre();
};