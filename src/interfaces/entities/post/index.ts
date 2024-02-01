import { IBaseEntity } from "../base";

export interface IPost extends IBaseEntity {
    user_id: number;
    title: string;
    body: string;
}
