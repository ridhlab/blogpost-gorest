import { ROUTES } from "@/constants/route";
import { parsingRoute } from "@/helpers/route";

export const Breadcrubms = {
    Users: {
        Index: () => [{ label: "List User", href: ROUTES.USERS.INDEX }],
        Detail: (id: number) => [
            { label: "List User", href: ROUTES.USERS.INDEX },
            {
                label: "Detail User",
                href: parsingRoute(ROUTES.USERS.INDEX, { id }),
            },
        ],
    },
    Post: {
        Index: () => [{ label: "List Post", href: ROUTES.POSTS.INDEX }],
        Detail: (id: number) => [
            { label: "List Post", href: ROUTES.POSTS.INDEX },
            {
                label: "Detail Post",
                href: parsingRoute(ROUTES.POSTS.INDEX, { id }),
            },
        ],
    },
};