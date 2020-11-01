import { BaseResponse } from './base-response.interface';

export interface IResource {
  id: number;
  name: string;
  year: number;
  color: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  pantone_string: string;
}

export type IResourceResponse = BaseResponse<IResource>;
