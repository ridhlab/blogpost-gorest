import { IComment } from "@/interfaces/entities/comment";

export interface ICommentCreateRequest extends Omit<IComment, "id"> {}
export interface ICommentUpdateRequest extends Omit<IComment, "id"> {}
