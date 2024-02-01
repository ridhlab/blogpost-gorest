import { errorMessageServer } from "@/common/response-message";
import { GOREST_ENDPOINT } from "@/constants/route";
import { parsingRoute } from "@/helpers/route";
import { IUserResponseDetail } from "@/interfaces/responses/user";

export async function getUserDetail(id: number): Promise<IUserResponseDetail> {
    const response = await fetch(
        parsingRoute(GOREST_ENDPOINT.USERS.DETAIL, { id })
    );
    if (!response.ok) throw new Error(errorMessageServer.failedFetchData);
    return response.json();
}
