import { ITodo } from "@/interfaces/entities/todo";

export interface ITodoCreateRequest extends Omit<ITodo, "id"> {}
export interface ITodoUpdateRequest extends Omit<ITodo, "id"> {}
