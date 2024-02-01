import { IUser } from "@/interfaces/entities/user";

export interface IUserCreateRequest extends Omit<IUser, "id"> {}
export interface IUserUpdateRequest extends Omit<IUser, "id"> {}
