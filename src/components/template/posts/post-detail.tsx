import { BREADCRUMBS } from "@/common/breadcrumb";
import CardPostComments from "@/components/pages/posts/card-post-comments";
import CardPostDetail from "@/components/pages/posts/card-post-detail";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { IPost } from "@/interfaces/entities/post";
import { ICommentResponseIndex } from "@/interfaces/responses/comment";

interface IProps {
    post: IPost;
    comments: ICommentResponseIndex;
    author: string;
}

export default function PostDetailTemplate({ post, comments, author }: IProps) {
    return (
        <main className="flex flex-col gap-y-4">
            <Breadcrumbs items={BREADCRUMBS.Post.Detail(post.id)} />
            <CardPostDetail author={author} post={post} />
            <CardPostComments comments={comments} />
        </main>
    );
}
