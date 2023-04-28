import axios, { AxiosRequestConfig } from "axios";

export interface FetchDataResponse<TEntity> {
  count: number;
  next: string | null;
  results: TEntity[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f9e162d1b7a448a3b4116386a2add570",
  },
  headers: {
    "Content-Type": "application/json",
  },
});

export class ApiClient<TEntity> {
  readonly endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (configs?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchDataResponse<TEntity>>(this.endpoint, configs)
      .then((res) => res.data.results);

  getAllPagination = (configs?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchDataResponse<TEntity>>(this.endpoint, configs)
      .then((res) => res.data);

  get = (id: string | number, configs?: AxiosRequestConfig) =>
    axiosInstance
      .get<TEntity>(`${this.endpoint}/${id}`, configs)
      .then((res) => res.data);
}
