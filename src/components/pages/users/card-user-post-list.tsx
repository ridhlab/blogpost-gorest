"use client";

import Card from "@/components/shared/card/card";
import Slide from "@/components/shared/slide/slide";
import { IPostResponseIndex } from "@/interfaces/responses/post";
import CardPostList from "../posts/card-post-list";
import Pagination from "@/components/shared/pagination/pagination";
import { parsingRoute } from "@/helpers/route";
import { ROUTES } from "@/constants/route";
import { BsDatabaseFillSlash } from "react-icons/bs";

interface IProps {
    posts: IPostResponseIndex;
    userId: number;
}

export default function CardUserPostList({ posts, userId }: IProps) {
    const isEmpty = posts.data.length === 0;
    return (
        <Slide delay={0.4}>
            <Card
                title="List Post"
                footer={
                    !isEmpty ? (
                        <Pagination
                            currentPage={posts.meta.pagination.page}
                            totalPage={posts.meta.pagination.pages}
                            baseUrl={parsingRoute(ROUTES.USERS.DETAIL, {
                                id: userId,
                            })}
                            queryKeyPage="post_page"
                        />
                    ) : null
                }
            >
                {isEmpty ? (
                    <div className="flex flex-col items-center">
                        <BsDatabaseFillSlash className="text-slate-300 text-6xl" />
                        <p className="text-slate-300 font-semibold">
                            Empty Data
                        </p>
                    </div>
                ) : (
                    posts.data.map((post, index) => (
                        <CardPostList key={index} post={post} />
                    ))
                )}
            </Card>
        </Slide>
    );
}
