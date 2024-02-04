import { getPostIndex } from "@/api/posts";
import { getUserIndex } from "@/api/users";
import HomeTemplate from "@/components/template/home";

export default async function Home() {
    const users = await getUserIndex();
    const posts = await getPostIndex();
    return (
        <HomeTemplate
            totalPost={posts.meta.pagination.total}
            totalUser={users.meta.pagination.total}
        />
    );
}
