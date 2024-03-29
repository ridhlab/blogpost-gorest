"use client";

import Card from "@/components/shared/card/card";
import Slide from "@/components/shared/slide/slide";
import { ICommentResponseIndex } from "@/interfaces/responses/comment";
import CardPostCommentItem from "./card-post-comment-item";
import Pagination from "@/components/shared/pagination/pagination";
import { BsDatabaseFillSlash } from "react-icons/bs";
import { ROUTES } from "@/constants/route";
import { parsingRoute } from "@/helpers/route";

interface IProps {
    comments: ICommentResponseIndex;
    postId: number;
}

export default function CardPostComments({ comments, postId }: IProps) {
    const isEmpty = comments.data.length === 0;
    return (
        <Slide delay={0.4}>
            <Card
                title="Comments"
                footer={
                    !isEmpty ? (
                        <Pagination
                            currentPage={comments.meta.pagination.page}
                            totalPage={comments.meta.pagination.pages}
                            baseUrl={parsingRoute(ROUTES.POSTS.DETAIL, {
                                id: postId,
                            })}
                            queryKeyPage="comment_page"
                        />
                    ) : null
                }
            >
                {isEmpty ? (
                    <div className="flex flex-col items-center">
                        <BsDatabaseFillSlash className="text-slate-300 text-6xl" />
                        <p className="text-slate-300 font-semibold text-sm">
                            Empty Data
                        </p>
                    </div>
                ) : (
                    comments.data.map((comment, index) => (
                        <CardPostCommentItem comment={comment} key={index} />
                    ))
                )}
            </Card>
        </Slide>
    );
}
