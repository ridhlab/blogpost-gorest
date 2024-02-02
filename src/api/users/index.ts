import { errorMessageServer } from "@/common/response-message";
import { GOREST_ENDPOINT } from "@/constants/route";
import { ActivateStatusEnum } from "@/enums/activate-status";
import { GenderEnum } from "@/enums/gender";
import { parsingRoute, routeWithParams } from "@/helpers/route";
import { IUser } from "@/interfaces/entities/user";
import {
    IUserResponseDetail,
    IUserResponseIndex,
} from "@/interfaces/responses/user";

// Note: This variable will override user if response is not found
const userDefault = (id): IUser => ({
    email: "defaultuser@gmail.com",
    gender: GenderEnum.MALE,
    name: "Default User",
    id: id,
    status: ActivateStatusEnum.ACTIVE,
});

export async function getUserDetail(id: number): Promise<IUserResponseDetail> {
    const response = await fetch(
        parsingRoute(GOREST_ENDPOINT.USERS.DETAIL, { id }),
        { cache: "no-store" }
    );
    if (!response.ok) return { meta: null, data: userDefault(id) };
    return response.json();
}

export async function getUserIndex(
    query?: Record<string, string>
): Promise<IUserResponseIndex> {
    const response = await fetch(
        routeWithParams(GOREST_ENDPOINT.USERS.INDEX, query ?? {}),
        { cache: "no-store" }
    );
    if (!response.ok) throw new Error(errorMessageServer.failedFetchData);
    return response.json();
}
