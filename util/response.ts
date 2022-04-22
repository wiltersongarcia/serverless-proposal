export interface FunctionResponseBody {
  code: number;
  message: string;
  data?: object;
}

export interface FunctionResponse {
  statusCode: number;
  body: string;
}
