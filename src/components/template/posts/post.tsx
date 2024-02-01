import { getUserDetail } from "@/api/users";
import { BREADCRUMBS } from "@/common/breadcrumb";
import CardPostList from "@/components/pages/posts/card-post-list";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import Card from "@/components/shared/card/card";
import Pagination from "@/components/shared/pagination/pagination";
import { IPostResponseIndex } from "@/interfaces/responses/post";

interface IProps {
    posts: IPostResponseIndex;
}

export default function PostTemplate({ posts }: IProps) {
    const { limit, page, pages } = posts.meta.pagination;
    const fromData = (page - 1) * limit + 1;
    const toData = page * limit;

    const title = (
        <div className="flex flex-col gap-y-2">
            <h3 className="font-semibold text-lg">Post List</h3>
            <div className="text-xs text-slate-500 flex flex-wrap gap-x-4">
                <p>Page : {page}</p>
                <p>
                    Ranges : {fromData} to {toData}
                </p>
                <p>Total Pages : {pages}</p>
            </div>
        </div>
    );

    return (
        <main className="flex flex-col gap-y-4">
            <Breadcrumbs items={BREADCRUMBS.Post.Detail(12)} />
            <Card
                title={title}
                footer={<Pagination currentPage={page} totalPage={pages} />}
            >
                {posts.data.map(async (post) => {
                    return <CardPostList key={post.id} post={post} />;
                })}
            </Card>
        </main>
    );
}
