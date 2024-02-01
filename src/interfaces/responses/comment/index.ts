import { IComment } from "@/interfaces/entities/comment";
import { IBaseResponseDetail, IBaseResponseIndex } from "../base";

export interface ICommentResponseIndex extends IBaseResponseIndex<IComment> {}
export interface ICommentResponseDetail extends IBaseResponseDetail<IComment> {}
