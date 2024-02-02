export const cacheConfig: { cache: RequestCache } = {
    cache: process.env.NODE_ENV === "production" ? "no-store" : "force-cache",
};
