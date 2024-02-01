import { errorMessageServer } from "@/common/response-message";
import { GOREST_ENDPOINT } from "@/constants/route";
import { routeWithParams } from "@/helpers/route";
import { IPostResponseIndex } from "@/interfaces/responses/post";

export async function getPostIndex(
    query?: Record<string, string>
): Promise<IPostResponseIndex> {
    console.log(
        query,
        routeWithParams(GOREST_ENDPOINT.POSTS.INDEX, query ?? {})
    );
    const response = await fetch(
        routeWithParams(GOREST_ENDPOINT.POSTS.INDEX, query ?? {})
    );
    if (!response.ok) throw new Error(errorMessageServer.failedFetchData);
    return response.json();
}
