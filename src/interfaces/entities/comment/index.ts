import { IBaseEntity } from "../base";

export interface IComment extends IBaseEntity {
    post_id: number;
    nane: string;
    email: string;
    body: string;
}
