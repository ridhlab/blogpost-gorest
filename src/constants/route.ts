export const ROUTES = {
    HOME: "/",
    USERS: {
        INDEX: "/users",
        DETAIL: "/users/:id",
    },
    POSTS: {
        INDEX: "/posts",
        DETAIL: "/posts/:id",
    },
};

const GOREST_PUBLIC_URL = "https://gorest.co.in/public/v1";

export const GOREST_ENDPOINT = {
    USERS: {
        INDEX: `${GOREST_PUBLIC_URL}/users`,
        DETAIL: `${GOREST_PUBLIC_URL}/users/:id`,
    },
    POSTS: {
        INDEX: `${GOREST_PUBLIC_URL}/posts`,
        DETAIL: `${GOREST_PUBLIC_URL}/posts/:id`,
    },
};
