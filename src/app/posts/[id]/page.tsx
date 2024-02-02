import { getCommentByPostId } from "@/api/comments";
import { getPostDetail } from "@/api/posts";
import { getUserDetail } from "@/api/users";
import PostDetailTemplate from "@/components/template/posts/post-detail";

export default async function PostDetail({
    params,
    searchParams,
}: {
    params: Record<string, string>;
    searchParams: Record<string, string>;
}) {
    const post = await getPostDetail(parseInt(params.id));
    const author = await getUserDetail(post.data.user_id);
    const comments = await getCommentByPostId(parseInt(params.id), {
        page: searchParams.comment_page,
    });
    return (
        <PostDetailTemplate
            post={post.data}
            comments={comments}
            author={author.data.name}
        />
    );
}
