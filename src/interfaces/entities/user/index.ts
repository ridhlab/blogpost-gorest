import { ActivateStatusEnum } from "@/enums/activate-status";
import { GenderEnum } from "@/enums/gender";
import { IBaseEntity } from "../base";

export interface IUser extends IBaseEntity {
    name: string;
    email: string;
    gender: GenderEnum;
    status: ActivateStatusEnum;
}
