import { getPostIndex } from "@/api/posts";
import { getUserDetail } from "@/api/users";
import UserDetailTemplate from "@/components/template/users/user-detail";

export default async function UserDetailPage({
    searchParams,
    params,
}: {
    searchParams: Record<string, string>;
    params: Record<string, string>;
}) {
    const user = await getUserDetail(parseInt(params.id));
    const posts = await getPostIndex({
        user_id: params.id,
        page: searchParams.post_page,
    });
    return <UserDetailTemplate user={user.data} posts={posts} />;
}
