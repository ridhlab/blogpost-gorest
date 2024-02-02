import { BREADCRUMBS } from "@/common/breadcrumb";
import CardUserDetail from "@/components/pages/users/card-user-detail";
import CardUserPostList from "@/components/pages/users/card-user-post-list";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { IUser } from "@/interfaces/entities/user";
import { IPostResponseIndex } from "@/interfaces/responses/post";

interface IProps {
    user: IUser;
    posts: IPostResponseIndex;
}

export default function UserDetailTemplate({ user, posts }: IProps) {
    return (
        <main className="flex flex-col gap-y-4">
            <Breadcrumbs items={BREADCRUMBS.Users.Detail(user.id)} />
            <CardUserDetail user={user} />
            <CardUserPostList posts={posts} userId={user.id} />
        </main>
    );
}
