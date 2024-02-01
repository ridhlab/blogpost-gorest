import { IPost } from "@/interfaces/entities/post";
import { IBaseResponseDetail, IBaseResponseIndex } from "../base";

export interface IPostResponseIndex extends IBaseResponseIndex<IPost> {}
export interface IPostResponseDetail extends IBaseResponseDetail<IPost> {}
