interface IOASResponse {
  success: boolean;
  message: string;
}

export interface IOASSuccessResponse extends IOASResponse {
  data?: object;
  meta?: object;
}

export interface IOASErrorResponse extends IOASResponse {
  statusCode: number;
  errors?: object;
}
