"use server";

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
import { cacheConfig } from "../base";
import { IUserCreateRequest } from "@/interfaces/requests/user";

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
        { ...cacheConfig }
    );

    if (!response.ok) return { meta: null, data: userDefault(id) };
    return response.json();
}

export async function getUserIndex(
    query?: Record<string, string>
): Promise<IUserResponseIndex> {
    const response = await fetch(
        routeWithParams(GOREST_ENDPOINT.USERS.INDEX, query ?? {}),
        { ...cacheConfig }
    );
    if (!response.ok) throw new Error(errorMessageServer.failedFetchData);
    return response.json();
}

export async function createUser(formData: FormData) {
    const response = await fetch(GOREST_ENDPOINT.USERS.INDEX, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.GOREST_TOKEN}`,
        },
        body: formData,
    });
    const jsonResponse = await response.json();
    if (!response.ok) {
        if (response.status === 422) {
            return {
                message: "Data not valid",
                status: response.status,
                data: jsonResponse.data,
            };
        }
        return {
            message: "Something went wrong",
            status: response.status,
            data: jsonResponse.data,
        };
    }
    return {
        message: "Success Created Data",
        status: response.status,
        data: jsonResponse.data,
    };
}
