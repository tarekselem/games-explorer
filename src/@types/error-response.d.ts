interface ErrorResponse {
  data: string;
  internal: boolean;
  status: number;
  statusText: string;
  error: Error;
}
