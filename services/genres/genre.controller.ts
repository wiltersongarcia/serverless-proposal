import { GenreService } from './genre.service';
import { MessageUtil } from '../../util/message';
import { FunctionResponse } from '../../util/response'

export class GenreController {
  private genreService: GenreService;

  constructor() {
    this.genreService = new GenreService();
  }

  getGenre(): FunctionResponse {
    try {
      const result: string = this.genreService.getGenre();

      return MessageUtil.success(result);
    } catch (error: any) {
      console.error(error);

      return MessageUtil.error(error.code, error.message);
    }
  }
}