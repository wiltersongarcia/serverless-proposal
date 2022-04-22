import { ArtistService } from './artist.service';
import { MessageUtil } from '../../util/message';
import { FunctionResponse } from '../../util/response'

export class ArtistController {
  private artistService: ArtistService;

  constructor() {
    this.artistService = new ArtistService();
  }

  getArtist(): FunctionResponse {
    try {
      const result: string = this.artistService.getArtist();

      return MessageUtil.success(result);
    } catch (error: any) {
      console.error(error);

      return MessageUtil.error(error.code, error.message);
    }
  }
}