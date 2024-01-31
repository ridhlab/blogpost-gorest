import { IUser } from "@/interfaces/entities/user";
import { IBaseResponseDetail, IBaseResponseIndex } from "../base";

export interface IUserResponseIndex extends IBaseResponseIndex<IUser> {}
export interface IUserResponseDetail extends IBaseResponseDetail<IUser> {}
