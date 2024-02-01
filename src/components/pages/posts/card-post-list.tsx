"use client";
import { getUserDetail } from "@/api/users";
import Button from "@/components/shared/button/button";
import { ROUTES } from "@/constants/route";
import { parsingRoute } from "@/helpers/route";
import { IPost } from "@/interfaces/entities/post";
import React from "react";
import { BsArrowsExpand, BsEyeFill } from "react-icons/bs";
import { MdOutlineExpandLess } from "react-icons/md";

interface IProps {
    post: IPost;
}

export default function CardPostList({ post }: IProps) {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div className="rounded border p-4 flex flex-col gap-y-4">
            <div className="flex flex-col">
                <h4 className="font-semibold">{post.title}</h4>
                <p className="text-sm text-slate-500">
                    Author ID: {post.user_id}
                </p>
            </div>
            <p
                className={`transition-all ${
                    expanded
                        ? "max-h-max"
                        : "text-ellipsis overflow-hidden whitespace-nowrap max-h-6"
                }`}
            >
                {post.body}
            </p>
            <div className="flex justify-center items-center gap-x-2">
                <Button
                    variant="outline"
                    color="neutral"
                    size="small"
                    icon={
                        expanded ? <MdOutlineExpandLess /> : <BsArrowsExpand />
                    }
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "Show Less" : "Show More"}
                </Button>
                <Button
                    icon={<BsEyeFill />}
                    size="small"
                    variant="outline"
                    href={parsingRoute(ROUTES.POSTS.DETAIL, { id: post.id })}
                >
                    Detail
                </Button>
            </div>
        </div>
    );
}
