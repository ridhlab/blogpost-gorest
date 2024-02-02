import { GOREST_ENDPOINT } from "@/constants/route";
import { ActivateStatusEnum } from "@/enums/activate-status";
import { GenderEnum } from "@/enums/gender";
import { parsingRoute } from "@/helpers/route";
import { IUser } from "@/interfaces/entities/user";
import { IUserResponseDetail } from "@/interfaces/responses/user";

// Note: This variable will override user if response is not found
const userDefault: IUser = {
    email: "defaultuser@gmail.com",
    gender: GenderEnum.MALE,
    name: "Default User",
    id: 1,
    status: ActivateStatusEnum.ACTIVE,
};

export async function getUserDetail(id: number): Promise<IUserResponseDetail> {
    const response = await fetch(
        parsingRoute(GOREST_ENDPOINT.USERS.DETAIL, { id })
    );
    if (!response.ok) return { meta: null, data: userDefault };
    return response.json();
}
