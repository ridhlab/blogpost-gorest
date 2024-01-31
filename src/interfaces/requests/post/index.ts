import { IPost } from "@/interfaces/entities/post";

export interface IPostCreateRequest extends Omit<IPost, "id"> {}
export interface IPostUpdateRequest extends Omit<IPost, "id"> {}
