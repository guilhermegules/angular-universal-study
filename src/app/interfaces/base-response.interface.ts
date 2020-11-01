export interface BaseResponse<T> {
  page: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  per_page: number;
  total: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_pages: number;
  data: T[];
}
