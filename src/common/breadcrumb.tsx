import { ROUTES } from "@/constants/route";
import { parsingRoute } from "@/helpers/route";
import { IoHomeSharp } from "react-icons/io5";

export const BREADCRUMBS = {
    Users: {
        Index: () => [
            { label: <IoHomeSharp />, href: ROUTES.HOME },
            { label: "List User", href: ROUTES.USERS.INDEX },
        ],
        Detail: (id: number) => [
            { label: <IoHomeSharp />, href: ROUTES.HOME },
            { label: "List User", href: ROUTES.USERS.INDEX },
            {
                label: "Detail User",
                href: parsingRoute(ROUTES.USERS.DETAIL, { id }),
            },
        ],
    },
    Post: {
        Index: () => [
            { label: <IoHomeSharp />, href: ROUTES.HOME },
            { label: "List Post", href: ROUTES.POSTS.INDEX },
        ],
        Detail: (id: number) => [
            { label: <IoHomeSharp />, href: ROUTES.HOME },
            { label: "List Post", href: ROUTES.POSTS.INDEX },
            {
                label: "Detail Post",
                href: parsingRoute(ROUTES.POSTS.DETAIL, { id }),
            },
        ],
    },
};
