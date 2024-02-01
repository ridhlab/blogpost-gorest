import { getPostIndex } from "@/api/posts";
import PostTemplate from "@/components/template/posts/post";

export default async function PostPage({
    params,
    searchParams,
}: {
    params: Record<string, string>;
    searchParams: Record<string, string>;
}) {
    const posts = await getPostIndex({ ...searchParams });

    return <PostTemplate posts={posts} />;
}
