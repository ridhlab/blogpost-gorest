import { getUserIndex } from "@/api/users";
import UserTemplate from "@/components/template/users/user";

export default async function UserPage({
    params,
    searchParams,
}: {
    params: Record<string, string>;
    searchParams: Record<string, string>;
}) {
    const users = await getUserIndex(searchParams);
    return <UserTemplate users={users} />;
}
