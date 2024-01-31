import { CompletionStatusEnum } from "@/enums/completion-status";
import { IBaseEntity } from "../base";

export interface ITodo extends IBaseEntity {
    user_id: number;
    title: string;
    due_on: string;
    status: CompletionStatusEnum;
}
