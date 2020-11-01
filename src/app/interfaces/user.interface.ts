import { BaseResponse } from './base-response.interface';

export interface IUser {
  id: number;
  email: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  first_name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  last_name: string;
  avatar: string;
}

export type IUsersResponse = BaseResponse<IUser>;
