import { errorMessageServer } from "@/common/response-message";
import { GOREST_ENDPOINT } from "@/constants/route";
import { parsingRoute, routeWithParams } from "@/helpers/route";
import { IPost } from "@/interfaces/entities/post";
import {
    IPostResponseDetail,
    IPostResponseIndex,
} from "@/interfaces/responses/post";

// Note: This variable will override post if response is not found
const postDefault = (id): IPost => ({
    id: id,
    user_id: 1,
    title: "Title Default Post",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem est, vehicula sed mattis vitae, vulputate et nibh. Vestibulum et accumsan nisi. Proin tortor metus, imperdiet vel eros ut, auctor mollis sem. Ut vel venenatis neque. Aenean pharetra ante in tortor feugiat, et posuere arcu hendrerit. Etiam sit amet purus laoreet, commodo ligula eget, posuere lacus. Proin sem nibh, suscipit eget commodo ut, mattis quis eros. Nam quis sem a purus consectetur efficitur at sit amet massa. Nam dapibus, dui ac venenatis tincidunt, metus justo faucibus quam, ac fringilla metus mi eu mauris. Maecenas sed tortor sit amet eros convallis imperdiet at quis dui. Aliquam ut ipsum varius, consequat eros in, lobortis velit. Nulla orci lorem, lacinia at lobortis ac, egestas eu quam. Curabitur in urna at ligula consectetur luctus.",
});

export async function getPostIndex(
    query?: Record<string, string>
): Promise<IPostResponseIndex> {
    const response = await fetch(
        routeWithParams(GOREST_ENDPOINT.POSTS.INDEX, query ?? {}),
        { cache: "no-store" }
    );
    if (!response.ok) throw new Error(errorMessageServer.failedFetchData);
    return response.json();
}

export async function getPostDetail(id: number): Promise<IPostResponseDetail> {
    const response = await fetch(
        parsingRoute(GOREST_ENDPOINT.POSTS.DETAIL, { id: id.toString() }),
        { cache: "no-store" }
    );
    if (!response.ok) return { meta: null, data: postDefault(id) };
    return response.json();
}
