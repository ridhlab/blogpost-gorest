import { ITodo } from "@/interfaces/entities/todo";
import { IBaseResponseDetail, IBaseResponseIndex } from "../base";

export interface ITodoResponseIndex extends IBaseResponseIndex<ITodo> {}
export interface ITodoResponseDetail extends IBaseResponseDetail<ITodo> {}
