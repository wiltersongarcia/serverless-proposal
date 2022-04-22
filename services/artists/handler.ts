import { Handler } from 'aws-lambda';
import { ArtistController } from './artist.controller';

const artistController = new ArtistController()

export const getArtist: Handler = async () => {
  return artistController.getArtist();
};