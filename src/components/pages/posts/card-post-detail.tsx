"use client";

import Card from "@/components/shared/card/card";
import Slide from "@/components/shared/slide/slide";
import { IPost } from "@/interfaces/entities/post";
import { FaCircleUser } from "react-icons/fa6";

interface IProps {
    post: IPost;
    author: string;
}

export default function CardPostDetail({ author, post }: IProps) {
    return (
        <Slide delay={0.2}>
            <Card
                title={post.title}
                footer={
                    <div className="flex text-sm text-slate-500 gap-x-4">
                        <p>Written by : </p>
                        <div className="flex gap-x-1 items-center group">
                            <FaCircleUser className="group-hover:text-blue-500 transition-all" />
                            <span>{author}</span>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col">
                    <p>{post.body}</p>
                </div>
            </Card>
        </Slide>
    );
}
