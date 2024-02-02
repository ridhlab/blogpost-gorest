import { errorMessageServer } from "@/common/response-message";
import { GOREST_ENDPOINT } from "@/constants/route";
import { routeWithParams } from "@/helpers/route";
import { ICommentResponseIndex } from "@/interfaces/responses/comment";

export async function getCommentByPostId(
    postId: number
): Promise<ICommentResponseIndex> {
    const response = await fetch(
        routeWithParams(GOREST_ENDPOINT.COMMENTS.INDEX, {
            post_id: postId.toString(),
        })
    );
    if (!response.ok) throw new Error(errorMessageServer.failedFetchData);
    return response.json();
}
