"use client";
import { getUserDetail } from "@/api/users";
import Button from "@/components/shared/button/button";
import Card from "@/components/shared/card/card";
import { ROUTES } from "@/constants/route";
import { parsingRoute } from "@/helpers/route";
import { IPost } from "@/interfaces/entities/post";
import React from "react";
import { BsArrowsExpand, BsEyeFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineExpandLess } from "react-icons/md";

interface IProps {
    post: IPost;
}

export default function CardPostList({ post }: IProps) {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Card
            clsx={["border"]}
            title={
                <div className="flex flex-col gap-y-1">
                    <h4 className="font-semibold">{post.title}</h4>
                    <div className="text-sm text-slate-500 flex gap-x-2">
                        <p>Author ID:</p>
                        <div className="flex gap-x-1 items-center">
                            <FaCircleUser className="group-hover:text-blue-500 transition-all" />
                            {post.user_id}
                        </div>
                    </div>
                </div>
            }
            footer={
                <div className="flex justify-center items-center gap-x-2">
                    <Button
                        variant="outline"
                        color="neutral"
                        size="small"
                        icon={
                            expanded ? (
                                <MdOutlineExpandLess />
                            ) : (
                                <BsArrowsExpand />
                            )
                        }
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? "Show Less" : "Show More"}
                    </Button>
                    <Button
                        icon={<BsEyeFill />}
                        size="small"
                        variant="outline"
                        href={parsingRoute(ROUTES.POSTS.DETAIL, {
                            id: post.id,
                        })}
                    >
                        Detail
                    </Button>
                </div>
            }
        >
            <p
                className={`transition-all ${
                    expanded
                        ? "max-h-max"
                        : "text-ellipsis overflow-hidden whitespace-nowrap max-h-6"
                }`}
            >
                {post.body}
            </p>
        </Card>
    );
}
